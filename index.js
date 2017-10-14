'use strict';
var fs = require('fs');
var googleTrends = require('google-trends-api');


googleTrends.interestOverTime({keyword: 'Valentines Day'})
.then((res) => {
  fs.writeFile("output.json", res, function(err) {
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
