const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    //setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: 1,
  },
});
