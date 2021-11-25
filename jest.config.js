'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePaths: ['.'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['./nest/**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['./nest/console', './nest/database'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map
