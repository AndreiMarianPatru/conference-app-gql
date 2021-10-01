const dictionaryResolvers = {
  Query: {
    typeList: async (_parent, _args, { dataSources }, _info) => {
      const typeList = dataSources.dictionaryDb.getTypeList()
      return typeList
    },
    categoryList: async (_parent, _args, { dataSources }, _info) => {
      const categoryList = dataSources.dictionaryDb.getCategoryList()
      return categoryList
    },
    countryList: async (_parent, _args, { dataSources }, _info) => {
      const countryList = dataSources.dictionaryDb.getCountryList()
      return countryList
    },
    countyList: async (_parent, _args, { dataSources }, _info) => {
      const countyList = dataSources.dictionaryDb.getCountyList()
      return countyList
    },
    cityList: async (_parent, _args, { dataSources }, _info) => {
      const cityList = dataSources.dictionaryDb.getCityList()
      return cityList
    }
  }
}
module.exports = dictionaryResolvers
