/// <reference types="cypress"/>
import TC1 from "../POM/TC1"

const firstpage = new TC1()
const Element = firstpage.elements
const login = require('../fixtures/valid.json')

describe('Automation_Assignment-1', () => {
    before(() => {

        cy.visit('http://automationpractice.com/')

    })

    it('TC01-Search with Your Name', () => {

        Element.SearchInput()
            .type(login.name)

        Element.SearchInput().then(($el) => {

            expect($el).to.have.value(login.name)
        })


        Element.Searchbtn()
            .click()

        cy.url()
            .should('include', login.name)

        Element.Errormsg()
            .should('include.text', login.error)
            .should('include.text', login.name)


    })



})

