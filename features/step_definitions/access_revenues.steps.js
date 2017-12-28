//const chai = require('chai');
//const chaiAsPromised = require('chai-as-promised');

var path = require('path');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require(path.join(
  __dirname,
  '..',
  '..',
  '..',
  'lib',
  'cucumberLoader'
)).load();


//chai.use(chaiAsPromised);
//const expect = chai.expect;

defineSupportCode(({After, Given, Then, When}) => {
  After((scenario, done) => done());

  Given('I go to receivable module', function (callback) {
    revenuePage.visit().then(callback);
  });

  When('I click on the revenue tab', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('I see the list of the revenues', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
});