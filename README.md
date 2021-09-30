# compress

[在线查看代码结构](https://github1s.com/LifeOrLife/compress)  
[compresss](https://lifeorlife.github.io/compress/)

### 关于 vite

**2021-10-1**

目前`vite`更新到版本 `2.6.1`, 更新之后在 `vite.config.js` 里进行如下设置：

```js
server: {
    host: true
},
```

此时，`vite` 启动之后，`network` 还是没显出出来。

查看 `vite` 仓库代码之后，发现已经有人修复了这个 bug，待更新~~

[fix#5165](https://github.com/vitejs/vite/pull/5156)
