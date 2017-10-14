'use strict';

var googleTrends = require('google-trends-api');

googleTrends.interestOverTime({keyword: 'Apple'})
.then((res) => {
  console.log('this is res', res);
})
.catch((err) => {
  console.log('got the error', err);
  console.log('error message', err.message);
  console.log('request body',  err.requestBody);
});
