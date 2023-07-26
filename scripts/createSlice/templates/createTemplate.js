const fs = require('fs/promises')
const resolveRoot = require('../resolveRoot')
const createUI = require('./createUI')
const createPublicApi = require('./createPublicApi')
const createModel = require('./createModel')

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName))
  } catch (e) {
    console.log(`не удалось создать директорию для слайса ${sliceName}`)
  }

  await createModel(layer, sliceName)
  await createUI(layer, sliceName)
  await createPublicApi(layer, sliceName)
}