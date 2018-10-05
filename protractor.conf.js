/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.jetblue.com',

  capabilities: {
      browserName:'firefox'
  },

  framework: 'jasmine',  // set to "custom" instead of cucumber.

  specs: [
    'spec/*.js'     // Specs here are the cucumber feature files
  ],

 onPrepare: function () {
    browser.manage().window().maximize(); 

    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    global.expect = chai.expect;

  }
};
