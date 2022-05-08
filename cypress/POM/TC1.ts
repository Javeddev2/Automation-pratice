/// <reference types="cypress" />
class TC1 {

    elements = 
    {
        SearchInput: () => 
        cy.get('#search_query_top'),

        Searchbtn:()=>
        cy.get('#searchbox > .btn'),

        Errormsg:()=>
        cy.get('.alert'),
  
    }



}
export default TC1