'use strict'

const IndexPage = require('../pages/index.page.js');
//const POKEMON = require('../../data/db.js');

describe('Filtro de Voos', ()=> {
  const indexPage = new IndexPage();

  //SEM Page Objects
  it('Deve pesquisar vôos saindo de Florianópolis para São Paulo', ()=>{
    browser.get('/#/');

    element(by.id('jbBookerDepart')).clear();
    element(by.id('jbBookerDepart')).sendKeys('Florianópolis');
    element(by.model('departCal.date')).sendKeys('07-18-2017');
    element(by.id('jbBookerArrive')).sendKeys('São Paulo');
    element(by.model('returnCal.date')).sendKeys('07-19-2017');

    element(by.buttonText('Find it')).click();

    //expect();
  });

  //COM PageObjects
  it('Deve pesquisar vôos saindo de Florianópolis para São Paulo', ()=>{
    indexPage.visit();

    //fill form
    indexPage.insertDepartCity('Florianópolis');
    indexPage.insertDepartDate('07-18-2017');
    indexPage.insertArriveCity('São Paulo');
    indexPage.insertArriveDate('07-19-2017');

    indexPage.findFlights();

    //var someObj = element(by.binding('errorMessage'));
    //expect()
  });
});
