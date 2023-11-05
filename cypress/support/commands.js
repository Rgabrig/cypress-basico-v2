Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Raphael')
    cy.get('#lastName').type('Gabrig')
    cy.get('#email').type('raphaelgabrig@email.com')
    cy.get('#open-text-area').type('Teste text area')
    //cy.get('button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
})