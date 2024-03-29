# AsosStudentDiscount
This is a Cucumber Cypress Framework using Page Object design  Created for Testing ASOS Student discount functionality.   

## Steps to Run the test 
1. Install nstall node and nmp ( https://docs.npmjs.com/downloading-and-installing-node-js-and-npm )
2. verify the node is installed by executing  'node' in the command prompt and it should display "Welcome to Node.js v14.15.5."
3. Clone this git repository 
4. Open the command prompt terminal  in the same folder where the git repository is saved
5. In the terminal execute this command  **```npm install cypress```**
6. Once installation completed, please run the  command the execute the test\
 **```npx cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome```** (To execute all the feature files in the project, this can be used for CI/CD integration).\
 if we want to execute test based on tag **```npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome```**
7. once the execution is finished , please execute this command too **```node .\cucumber-html-report.js```** ( This is to  generate the Cucumber html report , which will be  available in  CypressAutomation/reports/cucumber-htmlreport.html/index.html)

 
Video of execution   : 1. https://www.awesomescreenshot.com/video/5048908?key=18cc0f8ad61513b1270039405acd6ebe

 2. https://www.awesomescreenshot.com/video/5035427?key=a2a4d6d5e6554c97c22e5f4458962b95

![Report](https://user-images.githubusercontent.com/57806739/131534182-a76a164f-9cb2-4016-b0fa-c4fd169da1e7.png)

 Issues indentifed in the test : https://github.com/titus-joseph/cypressTest/issues/1
 
 Presentaion document for the test can be found here :https://1drv.ms/p/s!AresRhVEbwpUhh7_EaRDOUTOzrJn?e=E8cFyw
 

