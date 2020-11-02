# basic-configuration

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```



- ## 动态权限的配置

  通过路由守卫，在每次进入路由之前判断是否符合当前权限的路由表，符合权限的通过，不符合的跳转至指定页面

  路由表也是通过后台权限返回的动态路由



- ## 按钮的权限

  通过自定义指令来实现：就是通过vuex中存的角色信息来判断显隐（相当于v-show）

- ## 侧边栏

  

- ## 面包屑

  

- ## 数据交互

  

- ## 封装request

  

- ## mock数据



- ## 自动化测试

  1. 安装插件：vue add @vue/unit-jest
  2. vue/test-utils