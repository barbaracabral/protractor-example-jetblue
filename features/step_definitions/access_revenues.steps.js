//const chai = require('chai');
//const chaiAsPromised = require('chai-as-promised');

const RevenuePage = require('../pages/revenue_page.js');

//chai.use(chaiAsPromised);
//const expect = chai.expect;

module.exports = function(){
  const revenuePage = new RevenuePage();

  this.Given('I go to receivable module', function (callback) {
    revenuePage.visit().then(callback);
  });

  this.When('I click on the revenue tab', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then('I see the list of the revenues', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}
