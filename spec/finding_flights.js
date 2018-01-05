'use strict'

const IndexPage = require('../pages/index.page.js');
//const POKEMON = require('../../data/db.js');

describe('Filtro de Voos', ()=> {
  const indexPage = new IndexPage();

  it('Deve pesquisar vôos saindo de Florianópolis para São Paulo', ()=>{
    indexPage.visit();
    element(by.id('jbBookerDepart')).clear();
    element(by.id('jbBookerDepart')).sendKeys('Florianópolis');
    element(by.model('departCal.date')).sendKeys('12-29-2017');
    element(by.id('jbBookerArrive')).sendKeys('São Paulo');
    element(by.model('returnCal.date')).sendKeys('12-29-2017');

    element(by.buttonText('Find it')).click();

    var someObj = element(by.binding('errorMessage'));

    console.log(someObj);
  //  console.dir(someObj);

    //expect(element(by.binding('errorMessage'))).to.equal('Please enter valid departure city.');

    browser.sleep('35000');

    //indexPage.pesquisarPokemon('mew');
    //expect(listagemPage.resultados.count()).toEqual(2);
  });
});

/*
describe('Inclusão de pokémons', ()=> {
  const listagemPage = new ListagemPage();
  it('Deve incluir um pokémon', ()=>{
    listagemPage.visit();
    listagemPage.incluirPokemon(POKEMON.new_pokemon);
    expect(listagemPage.resultados.count()).toEqual(6);
  });
}); */
