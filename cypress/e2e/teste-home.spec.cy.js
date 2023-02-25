/// <reference types="cypress" />

describe('Test in my home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });


  it('test add name', () => {
    cy.get('.input_home').type('Claudio Soares')
      .get('.button_left').click()
      .get('li').first().should('contain', 'Claudio Soares')

    cy.get('.input_home').type('João Soares')
      .get('.button_left').click()
      .get('li').last().should('contain', 'João Soares')
  })

  it('repeated name test', () => {
    cy.get('.input_home').type('Claudio Soares')
      .get('.button_left').click()
      .get('.input_home').type('Claudio Soares')
      .get('.button_left').click()
      .get('#span')
      .should('contain', 'O um nome já esta na lista...')
      .get('.input_home').should('contain', '')

    cy.get('.input_home').type('João Soares')
      .get('.button_left').click()
      .get('li').last().should('contain', 'João Soares')
  })

  it('input null', () => {
    cy.get('.button_left').click()
      .get('#span')
      .should('contain', 'Digite um nome primeiro...')
  })

  it('button_clean_list', () => { 
    cy.get('.input_home').type('Claudio Soares')
      .get('.button_left').click()
      .get('li').first().should('contain', 'Claudio Soares')
      .get('.input_home').type('João Soares')
      .get('.button_left').click()
      .get('li').last().should('contain', 'João Soares')
    
    cy.get('.button_right').click()
      .get('li').first().should('contain', 'Lista de nomes vazia...')
  })
})