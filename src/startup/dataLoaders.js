const { getUserDataLoaders } = require('../features/user/dataLoaders')
const getConferencesLoaders = require('../features/conference/dataLoaders')

module.exports = dbInstance => ({
  ...getUserDataLoaders(dbInstance),
  ...getConferencesLoaders(dbInstance)
})
