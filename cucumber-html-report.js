const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '92.0'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10.00'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Asos project'},
            {label: 'Release', value: '1.1'},
            {label: 'Cycle', value: 'Regression cycle1'},
            {label: 'Execution Start Time', value: 'Aug 29th 2021, 10:00 PM EST'},
            {label: 'Execution End Time', value: 'Aug 29th 2021, 10:56 PM EST'}
        ]
    }
});