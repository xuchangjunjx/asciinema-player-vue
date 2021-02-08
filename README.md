# asciinema-player-vue

## How to use

```bash
yarn install @secrets/asciinema-player-vue
```

```js
import AsciinemaPlayer' from '@secrets/asciinema-player-vue';
Vue.vue(AsciinemaPlayer);
```

public/index.html 手动引入 asciinema-player 的 js 和 css 文件，这个没办法，不然变量无法注入到 window 对象中

```html
<link rel="stylesheet" type="text/css" href="/asciinema-player.css" />
<script src="/asciinema-player.js"></script>
```

原插件中的 src 属性配置 cast 或者 json 文件会发起一个 http 请求,但是我们想配置一个 string。因此，在组件中我加入了 base64 来把配置文件变成 base64 格式的数据，像这样:`data:application/json;base64,xxxxxx`;但是就需要在自己工程里配置一个 loader,cast 文件内的数据，变成一个字符串传入就行了。后面的加密过程我会处理。

- 引入本地文件

```js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("cast")
      .test(/\.cast$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
```

- 引用服务器上资源

```html
:src="/YOUR_SERVER/xxx.cast"
```

如果有跨域就配置一个代理,开发环境直接配置 devServer.proxy,和调研普通 API 一样,会发起一个 GET 请求

## demo

在 example 文件夹中

参数配置和原生插件一样

```bash
yarn install && yarn serve
```
