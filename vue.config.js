module.exports = {
  css: {
    extract: true,
  },
}

const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'postcss',
      patterns: [path.resolve(__dirname, './src/assets/scss/tailwind.scss')],
    },
  },
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        }
      })
  },
}
