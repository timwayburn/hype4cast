'use strict';
var fs = require('fs');
var googleTrends = require('google-trends-api');

<<<<<<< HEAD
=======
var googleTrends = require('google-trends-api');
>>>>>>> 4ea8cb8bffbcf9eccbb831988571f7138bbc5d5f

googleTrends.interestOverTime({keyword: 'Apple'})
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
