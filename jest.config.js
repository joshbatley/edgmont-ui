module.exports = {
  'testEnvironment': 'jsdom',
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!src/index.tsx",
    "!src/serviceWorker.ts"
  ],
  "setupFilesAfterEnv": ['<rootDir>/setupTests.ts'],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 70,
      "lines": 80,
      "statements": 80
    }
  }
}
