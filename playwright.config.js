const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  use: {
    baseURL: 'https://conduit-realworld-example-app.fly.dev/',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
});