module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  collectCoverage: true,
  clearMocks: true,
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageDirectory: 'coverage'
};
