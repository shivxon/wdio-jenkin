var Testrail = require('testrail-api');

var testrail = new Testrail({
host: 'https://nimitjain311986.testrail.io',
user: 'nimitjain311986@gmail.com',
password: 'Pass1234@'
});

var TestRailProject = function(){
testrail.getCases(2, function (err, response, cases) {
    console.log(cases);
  });
}

module.exports={
    TestRailProject
}