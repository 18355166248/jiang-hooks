export default {
  ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: true,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'mihooks',
  // favicon: '/simple-logo.svg',
  // logo: '/logo.svg',
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [{ rel: 'stylesheet', href: '/style.css' }],
  navs: {
    'zh-CN': [null, { title: 'GitHub', path: 'https://github.com/alibaba/hooks' }],
    'en-US': [null, { title: 'GitHub', path: 'https://github.com/alibaba/hooks' }],
  },
  locales: [['zh-CN', '中文']],
};
