/// <reference types="Cypress" />

import WomenProductPage from '../../../../support/pageObjects/WomensProductPage'
import StuDiscountPage from '../../../../support/pageObjects/StuDiscountPage'
import studentValidationPage from '../../../../support/pageObjects/studentValidationPage'
import LoginPage from '../../../../support/pageObjects/LoginPage'


import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome

const studentdis = new StuDiscountPage()
const studentValidation = new studentValidationPage()
const womenProduct = new WomenProductPage()
const loginpage = new LoginPage()
let name
Given('I open student discount Page', () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('include', 'student-validation')
})

// When I Fill in details 
When('I fill in the required details', function () {
    studentdis.enterfirstname().type(this.data.name1)
    studentdis.entersecondname().type(this.data.surname1)
    studentdis.studentCountry().select(this.data.country).should('have.value', 'AU')
    studentdis.registeredEmailid().type(this.data.email1)
    studentdis.studentEmailid().type(this.data.studentEmailid)
    studentdis.graduationYear23().click()
    studentdis.intrestedinWomenswear().click()
    studentdis.submittButton().click()
})

//Then I validate the email validation text and select women/Men category

Then('validate email verification message', function () {

    studentValidation.emailvalidationText().then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("We've just sent a verification email to your student email address! Click on the link inside to get your discount code...")).to.be.true
    })
})

Then('I Select Shop women and validate women shopping page url', function () {
    studentValidation.shopWomen().click()
    cy.url().should('include', 'ShopWomen')
})
Then('I Search for Denim ,select items and add to cart', function () {
    // womenProduct.selectWomenshopping().click()
    womenProduct.searchforitem().scrollIntoView().type('Denim')
    womenProduct.buttonSearch().click()
    womenProduct.firstitem_1().eq(0).click()

    womenProduct.selectsize().should('be.visible')

    womenProduct.selectsize().then((size) => {
        if (size.is("disabled")) {
            womenProduct.addToCart().click()
        }
        else {
            const regEXp = new RegExp('^(?!\Please)')
            womenProduct.selectsize().contains(regEXp)
                .then(element => {
                    var text = element.text();
                    womenProduct.selectsize().select(text)
                    womenProduct.addToCart().click()
                });
        }

    })

    womenProduct.checkout().click()
})

Then('enter credentials and login to application', function () {
    loginpage.emailid().type(this.data.email1)
    loginpage.password().type(this.data.password1)
    loginpage.signinButton().click()
    loginpage.continueCheckout().click()
    loginpage.continueEmptyBag().click()

    loginpage.userName().then(function (element) {
        const profilename = element.text()
        expect(profilename.includes(this.data.name1)).to.be.true
    })

    womenProduct.searchforitem().scrollIntoView().type('Denim')
    womenProduct.buttonSearch().click()
    womenProduct.firstitem_1().eq(0).click()

    womenProduct.selectsize().then((size) => {
        if (size.is("disabled")) {
            womenProduct.addToCart().click()
        }
        else {
            const regEXp = new RegExp('^(?!\Please)')
            womenProduct.selectsize().contains(regEXp)
                .then(element => {
                    var text = element.text();
                    womenProduct.selectsize().select(text);
                    womenProduct.addToCart().click()
                });
        }

    })

    womenProduct.checkout().click()

})

When('I submit the form without any data entered', function () {
    studentdis.submittButton().click()

})

Then('I validate the error message mandatory fields not filled', function () {
    studentdis.firstNameError().should('be.visible').should('contain', 'Please enter your first name');
    studentdis.emailidError().should('be.visible').should('contain', 'Please enter a valid email address');
    studentdis.studentemailidError('be.visible').should('contain', 'Please enter a valid email address');
    studentdis.graduationYearerror().should('be.visible').should('contain', 'Please select which year you will graduate in');
    studentdis.selectIntrestedin().should('be.visible').should('contain', 'Please select an option');



})

When('I enter the details in mandatory fileds', function () {
    studentdis.enterfirstname().type(this.data.name1)
    studentdis.entersecondname().type(this.data.surname1)
    studentdis.studentCountry().select(this.data.country).should('have.value', 'AU')
    studentdis.registeredEmailid().type(this.data.email1)
    studentdis.studentEmailid().type(this.data.studentEmailid)
    studentdis.graduationYear23().click()
    studentdis.intrestedinWomenswear().click()
})
Then('The error messges should be removed', function () {
    studentdis.firstNameError().should('not.be.visible')
    studentdis.emailidError().should('not.be.visible')
    studentdis.studentemailidError('not.be.visible')
    studentdis.graduationYearerror().should('not.be.visible')
    studentdis.selectIntrestedin().should('not.be.visible')
})



Given('I open asos.com and login with valid credentials', function () {
    cy.visit(Cypress.env('url2'))

    loginpage.myaccount().scrollIntoView().click()
    loginpage.signin().click()
    loginpage.emailid().type('melnababyt6@gmail.com')
    loginpage.password().type('Steve@2020')
    loginpage.signinButton().click()

})

When('I select  2 items and add to cart', () => {

})

Then('validate that cart contains added items', () => {

})
Then('I select checkout and enter student discount code', () => {

})
Then('validate that 15% discount is applied on the total price', () => {

})
Then('click on pay and validate that discounted amount is displayed payment page', () => {

})

