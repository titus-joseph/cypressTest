class WomensProductPage{
    firstitem()
    {
         return  cy.get('._3TqU78D')
                // cy.get('#product-24523109 > ._3TqU78D > .ERlP6Bx > ._2r9Zh0W')
    }
    seconditem()
    {
        return cy.get('#product-23489029 > ._3TqU78D > ._1ldzWib > .qU9n4CQ > ._16nzq18')
    }

    selectsize()
    {
   
        return cy.get('#main-size-select-0')
    }

    addToCart(){
        return cy.get('[data-bind="text: buttonText"]')
    }

    selectsize(){
        return cy.get('#main-size-select-0')
    }

    checkout()
    {
        return cy.get(':nth-child(2) > ._1TlOB9h > ._1M-cSy1')
    }
    outofStockLabel(){
        return cy.get('.product-out-of-stock-label')
    }
    selectGoingout()
    {
        return cy.get('.feature__link ')
    }
    selectGoingOutItem(){
        return cy.get('.ERlP6Bx')
    }
    selectWomenshopping(){
       return cy.get('[href="/women/new-in/cat/?cid=27108&ctaref=15offnewcustomer|globalbanner|ww"]')
    }


    searchforitem(){
        return cy.get('[data-testid=search-input]')

      
    }
    buttonSearch(){
        return   cy.get('[data-testid=search-button-inline] > svg')
    }
    firstitem_1(){
        return cy.get('._3TqU78D')
    }
}
export default WomensProductPage;

   