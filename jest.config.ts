export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // Ref: https://kulshekhar.github.io/ts-jest/docs/
  globals: {
    'ts-jest': {
      useESM: true,
      // tsconfig: 'tsconfig.test.json',
      tsconfig: 'tsconfig.json',
    },
  },
  // moduleDirectories: ['node_modules', 'src'],
};
