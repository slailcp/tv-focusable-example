 
module.exports = {
  publicPath: "./",
  configureWebpack: {
      externals: {
        'vue': 'Vue',
        // 'element-ui': 'ELEMENT',
        // 'ant-design-vue':'antd',
        'moment': 'moment'
      }
    },
}