//const { ModuleLoader } = require("@graphql-tools/module-loader");
const { SQLDataSource } = require('../../utils/sqlDataSource')
const commonColumns = ['Id', 'Name', 'Code']
class DictionaryDb extends SQLDataSource {
  async getTypeList() {
    const result = await this.knex('DictionaryConferenceType').select(...commonColumns)
    return result
  }
}
module.exports = DictionaryDb
