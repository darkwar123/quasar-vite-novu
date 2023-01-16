/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers');
const createExternal = require('vite-plugin-external');

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      warnings: true,
      errors: true
    },
    boot: [
      'novu',
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'roboto-font',
      'material-icons',
    ],
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node16'
      },
      vueRouterMode: 'hash',
      viteVuePluginOptions: {
        template: {
          compilerOptions: {
            // Important! Tell vite that notification-center-web-component is custom web component, non-vue
            isCustomElement: (tag) => {
              return tag.includes('notification-center-web-component')
                || tag.includes('notification-center-component-content');
            },
          },
        },
      },
      vitePlugins: [
        // Important! Attach import react from "react" to window.React, react-dom same
        createExternal({
          externals: {
            react: 'React',
            ['react-dom']: 'ReactDOM',
          }
        })
      ]
    },
    devServer: {
      open: false
    },
    framework: {
      config: {},
      plugins: []
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,

      middlewares: [
        'render'
      ]
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',

      packager: {},

      builder: {
        appId: 'quasar-vite-novu'
      }
    },
    bex: {
      contentScripts: [
        'my-content-script'
      ],
    }
  }
});
