# AsosStudentDiscount
Steps to Run the test 
1. Install node  in your machine from   https://nodejs.org/en/   
2. verify the node is installed by executing  'node' in the command prompt 
3. Clone this git repository 
4. Open the command prompt in the same folder where the git repository is saved 
5. In the command prompt execute this command  "npm install cypress" 
6 .When the installation finished, please run the below command the execute the test "npx cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome"( Ensure that you have a chrome browser installed in the machine ) 
7. once the execution is finished , please execute this command too "node .\cucumber-html-report.js"  ( This is to  generate the Cucumber html report , which will be available in  CypressAutomation/reports/cucumber-htmlreport.html/index.html  folder
