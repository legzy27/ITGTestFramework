exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    //directConnect: true,

    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {

        "browserName": "chrome"

    },

    useAllAngular2AppRoots: true,

    plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
           automaticallyGenerateReport: true,
          removeExistingJsonReportFile: true,
          reportName: 'CucumberJS Report'
      }
  }],

    specs: ['features/*.feature'],


    cucumberOpts: {
        // require step definitions
       
        tags: '@test',
        format: 'json:.tmp/results.json',
        profile: false,
        require: [
          'features/stepDefinitions/signinDefinition.js' // accepts a glob
        ]
      }
    };

