const DataLoader = require('dataloader')
const getConferencesLoaders = dbInstance => {
  return {
    conferenceTypeById: new DataLoader(ids =>
      dbInstance
        .select('Id', 'Name', 'Code')
        .from('DictionaryConferenceType')
        .whereIn('Id', ids)
        .then(rows => ids.map(id => rows.find(x => x.id === id)))
    ),
    categoryById: new DataLoader(ids =>
      dbInstance
        .select('Id', 'Name', 'Code')
        .from('DictionaryCategory')
        .whereIn('Id', ids)
        .then(rows => ids.map(id => rows.find(x => x.id === id)))
    ),
    locationById: new DataLoader(ids =>
      dbInstance
        .select('Id', 'Name', 'Address', 'Latitude', 'Longitude', 'CityId', 'CountyId', 'CountryId')
        .from('Location')
        .whereIn('Id', ids)
        .then(rows => ids.map(id => rows.find(x => x.id === id)))
    ),
    speakersByConferenceId: new DataLoader(ids =>
      dbInstance
        .select('s.Id', 's.Name', 's.Nationality', 's.Rating', 'c.ConferenceId', 'c.isMainSpeaker')
        .from('ConferenceXSpeaker AS c')
        .innerJoin('Speaker AS s', 'c.SpeakerId', '=', 's.Id')
        .whereIn('c.ConferenceId', ids)
        .then(rows => ids.map(id => rows.filter(row => row.id === id)))
    ),
    statusByConferenceId: new DataLoader(ids =>
      dbInstance
        .select('ds.Id', 'ds.Name', 'c.ConferenceId', 'c.AttendeeEmail')
        .from('ConferenceXAttendee AS c')
        .innerJoin('DictionaryStatus AS ds', 'c.StatusId', '=', 'ds.Id')
        .whereIn(
          'c.ConferenceId',
          ids.map(x => x.id)
        )
        .whereIn(
          'c.AttendeeEmail',
          ids.map(x => x.userEmail)
        )
        .then(rows => ids.map(i => rows.find(x => x.conferenceId === i.id && x.attendeeEmail === i.userEmail)))
    ),
    cityById: new DataLoader(ids =>
      dbInstance
        .select('Id', 'Name', 'Code')
        .from('DictionaryCity')
        .whereIn('Id', ids)
        .then(rows => ids.map(id => rows.find(row => row.id === id)))
    ),
    countyById: new DataLoader(ids =>
      dbInstance
        .select('Id', 'Name', 'Code')
        .from('DictionaryCounty')
        .whereIn('Id', ids)
        .then(rows => ids.map(id => rows.find(row => row.id === id)))
    ),
    countryById: new DataLoader(ids =>
      dbInstance
        .select('Id', 'Name', 'Code')
        .from('DictionaryCountry')
        .whereIn('Id', ids)
        .then(rows => ids.map(id => rows.find(row => row.id === id)))
    )
  }
}
module.exports = getConferencesLoaders
