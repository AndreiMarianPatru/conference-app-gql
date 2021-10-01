const dictionaryResolvers = {
  Query: {
    typeList: async (_parent, _args, { dataSources }, _info) => {
      const typeList = dataSources.dictionaryDb.getTypeList()
      return typeList
    },
    categoryList: async () => {
      return []
    },
    countryList: async () => {
      return []
    },
    countyList: async () => {
      return []
    },
    cityList: async () => {
      return []
    }
  }
}
module.exports = dictionaryResolvers
