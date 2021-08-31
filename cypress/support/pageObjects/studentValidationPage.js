class studentValidationPage {
    emailvalidationText() {
        return cy.get('.confirm-page > .header > .container > .header__blurb > p')
    }
    ShopMen() {
        return cy.get('[href="/men/?ctaref=Student|Confirmation|ShopMen"]')
    }
    shopWomen() {
        return cy.get('[href="/women/?ctaref=Student|Confirmation|ShopWomen"]')
    }

    selectDenim() {
        return cy.get('._3TqU78D')
    }
    selectGoingout() {
        return cy.get('.feature__link ')
    }
}

export default studentValidationPage;