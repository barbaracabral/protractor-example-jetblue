'use strict'

class RevenuePage{
  constructor(){
    //this.filtro = element(by.dataTest('filtro'));
  }

  visit(){
    return browser.get('/#/revenues/transactions');
  }


}
module.exports = RevenuePage;
