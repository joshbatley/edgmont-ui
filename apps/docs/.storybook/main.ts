import { resolve } from "path";

const isProd = process.env.NODE_ENV === 'production';

const managerHead = (head) => `
  ${head}
  <link rel="icon" href="favicon.svg" type="image/svg+xml" sizes="any">
`

const managerHeadProd = (head) => `
  ${managerHead(head)}
  <base href="/react/">
`
console.log(process.env.NODE_ENV);
const config = {
  stories: [
    '../src/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  managerHead: (head) => isProd ? managerHeadProd(head) : managerHead(head),
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
  async viteFinal(config: any, { configType }: any) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },

    };
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
