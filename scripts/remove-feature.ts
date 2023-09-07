import { type Node, Project, SyntaxKind } from 'ts-morph'

const removedFeatureName = process.argv[2] // example isArticleCounterEnabled
const featureState = process.argv[3] // example off/on

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
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true
    }
  })

  return isToggleFeatures
}

files.forEach(sourceFile => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
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
  })
})

void project.save()
