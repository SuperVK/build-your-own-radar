require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./gtm.js')


const CSVDocument = require('./util/factory')

let homePageURL = window.location.protocol + '//' + window.location.hostname
homePageURL += (window.location.port === '' ? '' : ':' + window.location.port)

require('./radars/test.csv')
CSVDocument(new URL('./radars/test.csv', homePageURL).href).init().build()

// const GoogleSheetInput = require('./util/factory')

// GoogleSheetInput().build()
