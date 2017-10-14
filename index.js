'use strict';

var googleTrends = require('./lib/google-trends-api.min.js');

googleTrends.interestOverTime({keyword: 'Valentines Day'})
.then((res) => {
  console.log('this is res', res);
})
.catch((err) => {
  console.log('got the error', err);
  console.log('error message', err.message);
  console.log('request body',  err.requestBody);
});
