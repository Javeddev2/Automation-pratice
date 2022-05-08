/// <reference types="cypress" />
class TC2 {

    elements = 
    {

        Dresses:()=>
        cy.get('.sf-with-ul').last(),

        Smallsize:()=>
        cy.get('#layered_id_attribute_group_1'),

        Sizequantity:()=>
        cy.get('#ul_layered_id_attribute_group_1 > :nth-child(1) > label > a'),

        Products:()=>
        cy.get(' .product-container')

    }



}
export default TC2