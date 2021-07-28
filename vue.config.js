const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 预编译 + 运行时，适用于 dev 环境
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
          { from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml'},
          { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf'},
          { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js', to: 'js/'},
      ])
    ]
  }
  // 其他配置代码 ...

}