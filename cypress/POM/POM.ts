/// <reference types="cypress" />
class POM {

    elements = 
    {
        SearchInput: () => 
        cy.get('#search_query_top'),

        Searchbtn:()=>
        cy.get('#searchbox > .btn'),

        Errormsg:()=>
        cy.get('.alert'),

        Dresses:()=>
        cy.get('.sf-with-ul').last(),

        Smallsize:()=>
        cy.get('#layered_id_attribute_group_1'),

        Sizequantity:()=>
        cy.get('#ul_layered_id_attribute_group_1 > :nth-child(1) > label > a'),

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
export default POM