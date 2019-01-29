module.exports = {
  css: {
    extract: true
  }
}

const path = require( "path" );

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "postcss",
      patterns: [ path.resolve( __dirname, "./src/assets/scss/tailwind.scss" ) ]
    }
  }
};