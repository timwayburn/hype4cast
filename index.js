/*
APIs used:
google-trends-api: https://www.npmjs.com/package/google-finance
google-finance: https://www.npmjs.com/package/google-trends-api
blackRock:
*/

'use strict';
var fs = require('fs');
var googleTrends = require('google-trends-api');
var googleFinance = require('google-finance');

var finance_symbol = 'NASDAQ:GLUU';
var stock = 'GLUU';

var trend_file = stock + '_trend.json';
var finance_file = stock + '_finance.json';
googleTrends.interestOverTime({keyword: stock, geo: 'US', startTime: new Date('2017-09-01'), endTime: new Date('2017-10-11')})
.then((res) => {
  fs.writeFile('./out/' + trend_file,  res, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });
  //console.log('this is res', res);
})
.catch((err) => {
  console.log('got the error', err);
  console.log('error message', err.message);
  console.log('request body',  err.requestBody);
});
googleFinance.historical({
  symbol: finance_symbol,
  from: '2017-09-01',
  to: '2017-10-11'
}, function (err, quotes) {
  fs.writeFile('./out/' + finance_file, JSON.stringify(quotes), function(errs) {
      if(errs) {
          return console.log(errs);
      }
      console.log("The finance file was saved!");
  });
});
