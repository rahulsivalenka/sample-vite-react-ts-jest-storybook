module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "storybook-builder-vite"
  },
  
  /*
   * This is needed to fix the following issue:
   * 
   * "global is not defined"
   */
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
      // esbuild: {
      //   ...config.esbuild,
      //   jsxInject: `import React from 'react'`,
      // },
    };
  },
}