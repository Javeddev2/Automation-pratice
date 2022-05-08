/// <reference types="cypress"/>
import POM from "../POM/POM"

const register = new POM()
const Element = register.elements
const login = require('../fixtures/valid.json')

describe('Automation_Assignment-1', () => {
    before(() => {

        cy.visit('http://automationpractice.com/')

    })

    it('Three test cases', () => {

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

            Element.Firstproduct().invoke('text').then(($el) => {
            const productprice = $el.replace(/[^a-zA-Z0-9*$. ]/g, '')

            Element.Firstproductcart()
                .click({ force: true })

            Element.Cartpopup()
                .should('be.visible')
                .should('have.length', '1')


            Element.cartprice().invoke('text').then(($ele) => {
                let priceoncart = $ele
                expect(productprice).to.equal(priceoncart)


            })

        })



    })

})
