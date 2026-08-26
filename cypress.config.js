import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    fixturesFolder: false,
    specPattern: 'tests/e2e/specs/**/*.js',
    supportFile: 'tests/e2e/support/index.js',
  },
  screenshotsFolder: 'tests/e2e/screenshots',
  video: false,
  videosFolder: 'tests/e2e/videos',
})
