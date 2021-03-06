module.exports = {
  "testEnvironment": "jsdom",
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!src/index.tsx",
    "!src/serviceWorker.ts"
  ],
  "modulePaths": [
    "<rootDir>/src",
  ],
  "moduleNameMapper": {
    '\\.(css|less)$': '<rootDir>/src/styleMock.ts'
  },
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 70,
      "lines": 80,
      "statements": 80
    }
  }
}
