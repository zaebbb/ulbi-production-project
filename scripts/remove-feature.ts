import { type JsxAttribute, type Node, Project, SyntaxKind } from 'ts-morph'

const removedFeatureName = process.argv[2] // example isArticleCounterEnabled
const featureState = process.argv[3] // example off/on

const toggleFunctionName = 'toggleFeatures'
const toggleComponentName = 'ToggleFeatures'

if (!removedFeatureName) {
  throw new Error('Необходимо указать название фича-флага')
}

if (!featureState) {
  throw new Error('Необходимо указать состояние фича-флага (on/off)')
}

if (featureState !== 'off' && featureState !== 'on') {
  throw new Error('Необходимо указать корректное состояние фича-флага (on/off)')
}

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const isToggleFunction = (node: Node) => {
  let isToggleFeatures = false

  node.forEachChild(child => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true
    }
  })

  return isToggleFeatures
}

const isToggleComponent = (node: Node) => {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

  return identifier?.getText() === toggleComponentName
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)

  if (!objectOptions) return

  const onProperty = objectOptions.getProperty('on')
  const offProperty = objectOptions.getProperty('off')

  const featureNameProperty = objectOptions.getProperty('name')

  const onFunction = onProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
  const offFunction = offProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
  const featureName = featureNameProperty?.getFirstDescendantByKind(
    SyntaxKind.StringLiteral
  )?.getText().slice(1, -1)

  if (featureName !== removedFeatureName) return

  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody().getText() ?? '')
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody().getText() ?? '')
  }
}

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string
) => {
  return jsxAttributes.find((node) => node.getNameNode().getText() === name)
}

const getReplaceComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText()

  if (value?.startsWith('(')) {
    return value.slice(1, -1)
  }

  return value
}

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

  const onAttribute = getAttributeNodeByName(attributes, 'on')
  const offAttribute = getAttributeNodeByName(attributes, 'off')

  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature')
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1)

  if (featureName !== removedFeatureName) return

  const offValue = getReplaceComponent(offAttribute)
  const onValue = getReplaceComponent(onAttribute)

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue)
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue)
  }
}

files.forEach(sourceFile => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      replaceToggleFunction(node)
    }

    if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
      replaceToggleComponent(node)
    }
  })
})

void project.save()
