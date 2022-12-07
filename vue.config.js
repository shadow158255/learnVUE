const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false ,/*关闭语法检查*/

  //开启代理服务器(方法一)
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  //开启代理服务器(方法一)
  devServer:{
    proxy:{
      //前缀名，随便起，放在请求路径端口号后，***加前缀会强制走代理服务器，
      //而不会走public中已有的文件
      '/atguigu':{
        //代理请求地址
        target:'http://localhost:5000',
        //过滤掉代理请求路径中的前缀部分
        pathRewrite:{'^/atguigu':''},
        //用于支持websocket
        ws:true,
        //true：骗请求服务端，我也是5000；false：实话实说，其实我是8080；；；默认为真
        changeOrigin:true
      },
      '/demo':{
        //代理请求地址
        target:'http://localhost:5001',
        //过滤掉代理请求路径中的前缀部分
        pathRewrite:{'^/demo':''},
        //用于支持websocket
        ws:true,
        //true：骗请求服务端，我也是5000；false：实话实说，其实我是8080；；；默认为真
        changeOrigin:true
      }
    }
  }


})
