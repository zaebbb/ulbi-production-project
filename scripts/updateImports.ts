import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const isAbsolute = (value: string) => {
  const layers = ['app', 'features', 'shared', 'widgets', 'entities', 'pages']

  return layers.some(layer => value.startsWith(layer));
}

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach(importDeclaration => {
    const value = importDeclaration.getModuleSpecifierValue()

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier('@/' + value)
    }
  })
})

project.save()

// Добавить скрипт
// Правка eslint
// правка конфига resolvers
// tsconfig
// удалить виртуализацию
// update jest config
// update storybook config