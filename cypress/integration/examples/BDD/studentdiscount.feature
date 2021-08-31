Feature: End to end Student discount test

    application Regression
    @Regression
    Scenario: Register for student discount voucher code and login purchase an item 
     Given I open student discount Page
     When  I fill in the required details
     Then  validate email verification message 
     Then I Select Shop women and validate women shopping page url
     Then I Search for Denim ,select items and add to cart
     Then enter credentials and login to application 
     #Then click on checkout and apply student discount promotional code 
     #Then Validate that 15% discount is applied on total price 

     
   @Regression
    Scenario:  purchase an item with student discount of 15% (already received a discount coupon.)
    Given I open asos.com and login with valid credentials
    When  I select  2 items and add to cart 
    Then validate that cart contains added items 
    Then I select checkout and enter student discount code
    Then validate that 15% discount is applied on the total price
    Then click on pay and validate that discounted amount is displayed payment page 

     @sanity
     Scenario: Verify error messages on the student discount page with out entering any data for registration
     Given I open student discount Page
     When I submit the form without any data entered
     Then I validate the error message mandatory fields not filled 
     When I enter the details in mandatory fileds 
     Then The error messges should be removed 

   
