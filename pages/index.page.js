'use strict'

class IndexPage{
  constructor(){
    //this.filtro = element(by.dataTest('filtro'));
  }

  visit(){
    return browser.get('/#/');
  }


}
module.exports = IndexPage;
