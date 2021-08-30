class LoginPage
{
myaccount()
{
    return cy.get('._3iH_8F6')
}
signin(){
    return cy.get('[data-testid=signin-link]')

}
emailid(){
    return cy.get('#EmailAddress')
}
password()
{
    return cy.get('#Password')
}
signinButton()
{
    return  cy.get('#signin')
}
continueCheckout()
{
    return cy.get('.link-primary')
}
continueEmptyBag(){
  return   cy.get('.empty-bag-start-shopping-button > a')
}
userName(){return cy.get('.tiqiyps')}
}

export default LoginPage;
