/* #version=0.0.0-0#3 rm 2024-08-05T17:44:02 710962DACFC977E5 */
/* #version=0.0.0-0#2 rm 2024-06-26T18:39:54 E003573A32E3DDBC */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  lintOnSave: false,
  pluginOptions: {
    cordovaPath: "src-cordova",
  },
});
