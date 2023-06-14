const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "wsojy7",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

