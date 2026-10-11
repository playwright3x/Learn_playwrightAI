import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env
dotenv.config({
  path: path.resolve(__dirname, '.env')
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: [
    ['line'],
    ['allure-playwright']
  ],

  use: {
    // Read Base_url from .env
    baseURL: process.env.Base_url,

    trace: 'on-first-retry',

    // Run browser visibly
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});