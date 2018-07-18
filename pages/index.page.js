'use strict'

class IndexPage{
  constructor(){
    this.departcity = element(by.id('jbBookerDepart'));
    this.departdate = element(by.model('departCal.date'));
    this.arrivecity = element(by.id('jbBookerArrive'));
    this.arrivedate = element(by.model('returnCal.date'));

    this.findflightsbutton = element(by.buttonText('Find it'));
  }

  visit(){
    return browser.get('/#/');
  }

  insertDepartCity(city){
    this.departcity.clear();
    return this.departcity.sendKeys(city);
  }

  insertDepartDate(date){
    return this.departdate.sendKeys(date);
  }

  insertArriveCity(city){
    this.arrivecity.clear();
    return this.arrivecity.sendKeys(city);
  }

  insertArriveDate(date){
    return this.arrivedate.sendKeys(date);
  }

  findFlights(){
    this.findflightsbutton().click();
  }

}
module.exports = IndexPage;
