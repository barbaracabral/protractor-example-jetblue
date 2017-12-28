'use strict'
const IndexPage = require('../pages/index.page.js');
//const POKEMON = require('../../data/db.js');

describe('Filtro de Voos', ()=> {
  const indexPage = new IndexPage();

  it('Deve pesquisar vôos saindo de Florianópolis para São Paulo', ()=>{
    indexPage.visit();
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
