/// <reference types="Cypress" />
//import HomePage from '../../../../support/pageObjects/HomePage'
import WomenProductPage from '../../../../support/pageObjects/WomensProductPage'
import StuDiscountPage from '../../../../support/pageObjects/StuDiscountPage'
import studentValidationPage from '../../../../support/pageObjects/studentValidationPage'
import LoginPage from '../../../../support/pageObjects/LoginPage'


import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome

const studentdis=new StuDiscountPage()
const studentValidation=new studentValidationPage()
const womenProduct =new WomenProductPage()
const loginpage =new LoginPage()
let name
Given('I open student discount Page',()=>
{
    cy.visit(Cypress.env('url'))
    cy.url().should('include', 'student-validation')
})

// When I Fill in details 
When('I fill in the required details',function ()
{
    studentdis.enterfirstname().type(this.data.name1)
    studentdis.entersecondname().type(this.data.surname1)
    studentdis.studentCountry().select(this.data.country) .should('have.value', 'AU')
    studentdis.registeredEmailid().type(this.data.email1)
    studentdis.studentEmailid().type(this.data.studentEmailid)
    studentdis.graduationYear23().click()
    studentdis.intrestedinWomenswear().click()
    studentdis.submittButton().click()
})

//Then I validate the email validation text and select women/Men category

Then('validate email verification message',function()
{

    studentValidation.emailvalidationText().then(function(element)
        {
         const actualText=element.text()
          expect(actualText.includes("We've just sent a verification email to your student email address! Click on the link inside to get your discount code...")).to.be.true
        })
})

Then('I Select Shop women and validate women shopping page url',function(){
    studentValidation.shopWomen().click()
    cy.url().should('include', 'ShopWomen')
}) 


Then('I select Destination Denim and items to cart',function(){
    cy.get('[href="/women/new-in/cat/?cid=27108&ctaref=15offnewcustomer|globalbanner|ww"]').click()
     studentValidation.selectDenim().eq(0).click()
    // womenProduct.firstitem().eq(3).click()
    //new addition 

    cy.get("body").then($body => {
        if ($body.find(".product-out-of-stock-label").length > 0) {  
             //evaluates as true
            cy.get('[href="/women/new-in/cat/?cid=27108&ctaref=15offnewcustomer|globalbanner|ww"]')
            .click();
            studentValidation.selectDenim().eq(4).click()
        }
    });


// old 
     const regEXp=new RegExp('^(?!\Please)')
     womenProduct.selectsize().contains(regEXp)
     .then(element => {
     var text = element.text();
     womenProduct.selectsize().select(text);
    });

    womenProduct.addToCart().click()
    womenProduct.checkout().click()
    loginpage.emailid().type(this.data.email1)
    loginpage.password().type(this.data.password1)
    loginpage.signinButton().click()
    loginpage.continueCheckout().click()
    loginpage.continueEmptyBag().click()

    loginpage.userName().then(function(element)
    {
         const profilename=element.text()
         expect(profilename.includes(this.data.name1)).to.be.true
    })

    womenProduct.selectGoingout().eq(0).click()
     womenProduct.firstitem().eq(2).click()


})



Given('I open asos.com and login with valid credentials',()=>
{
    cy.visit(Cypress.env('url2'))
   
    loginpage.myaccount().scrollIntoView().click()
    loginpage.signin().click()
    loginpage.emailid().type('melnababyt6@gmail.com')
    loginpage.password().type('Steve@2020')
    loginpage.signinButton().click()

})

When  ('I select  2 items and add to cart',()=> 
{

})

Then ('validate that cart contains added items',()=>
{

}) 
Then ('I select checkout and enter student discount code',()=>
{

})
Then('validate that 15% discount is applied on the total price',()=>
{

})
Then('click on pay and validate that discounted amount is displayed payment page',()=>
{}) 


//And Validate the total prices
// And('Validate the total prices',()=>
// {
//     var sum=0
//     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


//         const amount=$el.text()
//         var res= amount.split(" ")
//        res= res[1].trim()
//        sum= Number(sum)+Number(res)
       
//        }).then(function()
//        {
//            cy.log(sum)
//        })
//        cy.get('h3 strong').then(function(element)
//        {
//            const amount=element.text()
//            var res= amount.split(" ")
//           var total= res[1].trim()
//           expect(Number(total)).to.equal(sum)
       
//        }) 
//     })

//     //Then select the country submit and verify Thankyou

//     Then('select the country submit and verify Thankyou',()=>
//     {
//         cy.contains('Checkout').click()
//         cy.get('#country').type('India')
//         cy.get('.suggestions > ul > li > a').click()
//         cy.get('#checkbox2').click({force: true})
//         cy.get('input[type="submit"]').click()
//         //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
//         cy.get('.alert').then(function(element)
//         {
//            const actualText=element.text()
//           expect(actualText.includes("Success")).to.be.true
//         })
//     })
//     //When I fill the form details
//     When('I fill the form details',function(dataTable)
//     {

//         // [bobz , male   ]
//         name = dataTable.rawTable[1][0]
//         homePage.getEditBox().type(dataTable.rawTable[1][0])
//         homePage.getGender().select(dataTable.rawTable[1][1])
//     })
//     // Then validate the forms behaviour
//     Then('validate the forms behaviour',function()
//     {
//     homePage.getTwoWayDataBinding().should('have.value',name)
//     homePage.getEditBox().should('have.attr','minlength','2')
//     homePage.getEntrepreneaur().should('be.disabled')
//     Cypress.config('defaultCommandTimeout', 8000)
//     })
//     // And select the Shop Page
//     And('select the Shop Page',()=>
//     {
//         homePage.getShopTab().click()
//     })

