# Karma 测试

基于karma测试常用的一些模块和配置

## 模块安装

```bash
# 基础测试库
npm install karma-cli -g
npm install karma mocha karma-mocha --save-dev

# 断言库
npm install should --save-dev
npm install karma-chai --save-dev

# 浏览器相关
npm install karma-firefox-launcher --save-dev
npm install karma-chrome-launcher --save-dev
```

## 配置

这里的配置主要关注的是`karma.conf.js`的相关配置。如果要使用karma和mocha最好通过`npm install karma-cli -g`全局安装`karma-cli`。[具体配置配置说明](http://karma-runner.github.io/2.0/config/configuration-file.html)

常用的几个字段

+ browsers: 浏览器配置; 如果浏览器无法启动需要进行相关浏览器的配置。
+ singleRun: 如果值为true, 则在浏览器运行完测试后会自动退出关闭浏览器窗口。