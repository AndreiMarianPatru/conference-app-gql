const { RESTDataSource } = require('apollo-datasource-rest')
const suggestedConferences = require('../../mock/suggestedConferences')

class ConferenceApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL
  }

  async getConferenceSuggestions(input) {
    const { conferenceId, attendeeEmail } = input

    //const url = "http://localhost:5001/api/suggestions/List?AttendeeEmail=${attendeeEmail}&ConferenceId=${conferenceId}";
    // eslint-disable-next-line no-undef

    const data = await this.get('suggestions/list', { conferenceId, attendeeEmail })
    // return await this.get('suggestions/list',{conferenceId,attendeeEmail})
    return await this.get('suggestions/list', { conferenceId, attendeeEmail })
    //return suggestedConferences
  }
}
module.exports = ConferenceApi
