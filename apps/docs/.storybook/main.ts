import { resolve, dirname, join } from 'path';

const isProd = process.env.NODE_ENV === 'production';

const managerHead = (head) => `
  ${head}
  <link rel="icon" href="favicon.svg" type="image/svg+xml" sizes="any">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
`

const managerHeadProd = (head) => `
  ${managerHead(head)}
  <base href="/react/">
`

const config = {
  stories: [
    '../src/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/preset-create-react-app"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-dark-mode"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
