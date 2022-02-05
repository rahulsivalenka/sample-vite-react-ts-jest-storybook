/*
 * This is needed to fix the following runtime issue
 * 
 * "The requested module '/node_modules/jest-mock/build/index.js' does not provide an export named 'fn'"
 */
import jest from 'jest-mock';
window.jest = jest;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}