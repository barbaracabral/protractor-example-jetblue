'use strict'

class IndexPage{
  constructor(){
    this.filtro = element(by.dataTest('filtro'));
  }

  visit(){
    return browser.get('/#/');
  }

  insertDepartDate(nome){
    return this.filtro.sendKeys(nome);
  }

}
module.exports = IndexPage;
