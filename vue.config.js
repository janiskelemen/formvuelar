// module.exports = {
//     css: {
//         extract: false
//     }
// }

const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "postcss",
      patterns: [path.resolve(__dirname, "./src/assets/css/tailwind.css")]
    }
  }
};