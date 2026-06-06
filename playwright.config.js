import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://conduit-realworld-example-app.fly.dev/',
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]]
});
