# 匠能hvac前端
## 使用
```javascript
$ git clone https://github.com/Jnlabiot/jn_hvac_ui.git
$ cd main
$ npm install
$ npm start         # visit http://localhost:8000
```
### 安装之前，推荐使用淘宝镜像源，npm默认是从国外源下载的会很慢，
```javascript
npm config set registry https://registry.npm.taobao.org

```
## 所有的包都记录在peckage.json文件中，您只要按如下操作就可以安装全部需要的包
```
npm install
```

### 执行完npm install 后，执行如下命令，就可以在开发者模式中启动项目，并且修改代码后会自动热重载
```
npm run serve
```

### 执行一下命令会生成dist文件，然后将此文件放在服务器中，并将nginx指定dist目录，就部署完成了
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
