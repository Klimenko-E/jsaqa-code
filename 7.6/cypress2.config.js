const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    viewportWidth: 360,
    viewportHeight: 640,
    retries: 1,
  },
});
