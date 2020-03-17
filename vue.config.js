module.exports = {
  publicPath: '',
  devServer: {
    host: 'localhost',
    port: 9090,
    proxy: {
      '/mock': {
        target: 'http://localhost:9090',
        // 是否开启 websocket
        ws: false,
        // 是否将主机头的原点改为目标的URL
        changeOrigin: false
      }
    }
  }
}
