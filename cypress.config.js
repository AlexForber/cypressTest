const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 70000,
    baseUrl: "https://kusto-gamma.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
