/// <reference types="cypress"/>
import TC3 from "../POM/TC3"

const thirdpage = new TC3()
const Element = thirdpage.elements
const login = require('../fixtures/valid.json')

describe('Automation_Assignment-1', () => {
    before(() => {

        cy.visit('/')

    })

    it('TC03-Add any product to cart and verify', () => {

        Element.Dresses()
            .click()

        Element.Firstproduct().invoke('text').then(($el) => {
            const productprice = $el.replace(/[^a-zA-Z0-9*$. ]/g, '')

            Element.Firstproductcart()
                .click({ force: true })

            cy.wait(3000)

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
