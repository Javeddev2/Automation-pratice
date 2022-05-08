/// <reference types="cypress"/>
import TC2 from "../POM/TC2"

const secondpage = new TC2()
const Element = secondpage.elements
const login = require('../fixtures/valid.json')

describe('Automation_Assignment-1', () => {
    before(() => {

        cy.visit('/')

    })

    it('TC02-Check number of length of dresses', () => {
        Element.Dresses()
            .click()

        cy.url().should('include', login.category)

        Element.Smallsize()
            .click()
            .should('be.checked')

        cy.url().should('include', login.size)

        Element.Sizequantity().invoke('text').then(($ele) => {

            const Sizecount = $ele.replace(/[^0-9*$. ]/g, '')

            Element.Products().should('have.lengthOf', Sizecount)


        })


    })

})
