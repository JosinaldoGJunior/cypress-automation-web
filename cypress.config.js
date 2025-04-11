const { defineConfig } = require("cypress");
require('dotenv').config();
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://barrigareact.wcaquino.me/',
    video: true,
    videoUploadOnPasses: false,
    videosFolder: 'cypress/artifacts/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/artifacts/screenshots',
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureAddVideoOnPass: false,
      allureCreateResultsOnFail: true
    },
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);

      on('after:spec', (spec, results) => {
        if (results && results.video && !results.stats.failures) {
          fs.unlinkSync(results.video);
        }
      });

      config.env.email = process.env.CYPRESS_EMAIL;
      config.env.password = process.env.CYPRESS_PASSWORD;
      config.env.baseUrl = process.env.CYPRESS_BASE_URL;
      
      return config;
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
});