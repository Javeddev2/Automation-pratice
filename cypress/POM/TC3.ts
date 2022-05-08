/// <reference types="cypress" />
class TC3 {

    elements = 
    {
        Dresses:()=>
        cy.get('.sf-with-ul').last(),

        Products:()=>
        cy.get(' .product-container'),

        Firstproduct:()=>
        cy.get('.first-in-line.first-item-of-tablet-line').find('.price').last(),

        Firstproductcart:()=>
        cy.get('.first-in-line.first-item-of-tablet-line').contains('Add to cart'),
        
        Cartpopup:()=>
        cy.get('#layer_cart > .clearfix'),

        cartprice:()=>
        cy.get('#layer_cart_product_price')

  
    }



}
export default TC3