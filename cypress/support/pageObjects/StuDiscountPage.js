class StuDiscountPage{

    enterfirstname(){
     return cy.get('#firstName')
    }
    entersecondname()
    {
        return cy.get('#lastName')
    }
    studentCountry(){
        return  cy.get('#territory')
    }
    registeredEmailid()
    {
        return cy.get('#asosEmail')
    }
    studentEmailid()
    {
        return  cy.get('#studentEmail')
    }
    graduationYear22()
    {
        return cy.get('input[id=2022]')
       // return cy.get('[id=2023]')
       // return cy.get('#[\\0-\\35] 32 022')
    
    }
   
    graduationYear23()
    {
        return cy.get('input[id=2023]')
    }
    intrestedinMenswear()
    {
        return  cy.get('.radio-fieldset > :nth-child(2) > .radio-box-label')
    }
    intrestedinWomenswear()
    {
        return cy.get('.radio-fieldset > :nth-child(3) > .radio-box-label')
       // cy.get('.radio-fieldset > :nth-child(3) > .radio-box-label')
    }

    submittButton(){
        return cy.get('#submitButton')
    }

}

export default StuDiscountPage;