# Thelian

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录格式
      dist：执行yarn build或者npm run build 后生成的包
      node_modules：依赖包
      pubilc：静态资源文件，不会被webpage压缩。可用于存放大文件等
      src：项目资源文件
          assets：图片资源文件
          common：公共资源文件，用于存放公共组件、网络请求封装、公共样式等
            components：公共组件，其它项目亦可使用。用于存放可多个项目复用的组件
            mockData：mock数据
            netWork：axios组件的封装，用于项目发送http请求的封装
            style：公共样式、基本样式重置
            utils：用于存放公共方法
          components：用于存放封装的项目公共组件
          mixins：混入
          router：路由
          store：状态管理
          view：业务视图
          APP：vue编译入口
          main.js：文件加载入口
      browserslistrc：浏览器兼容配置
      editorconfig：代码规范配置文件
      env.development：开发环境配置文件
      env.production：生产环境配置文件
      eslintrc：eslint配置文件
      gitignore：git忽略配置文件
      babel.config：bable配置文件
      package.json： 项目配置
      package-lock.json： 项目实际使用包记录文件
      README.MD：项目说明文件
      vue.config.js：项目打包配置文件

