const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://your-api-endpoint.com", // 백엔드 API 서버
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};

module.exports = {
  lintOnSave: false,
};

