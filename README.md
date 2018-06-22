# 前端测试

## mocha

[mocha 基础使用](https://www.jianshu.com/p/27a2daffb10c)

实例

```javascript
const assert = require('assert');

describe('测试套件描述', function() {
  it('测试用例描述: 1 + 2 = 3', function() {
    // 测试代码
    const result = 1 + 2;
    // 测试断言
    assert.equal(result, 3);
  });
});
```

Mocha 测试用例主要包含下面几部分:

1.  describe 定义的测试套件(test suite)
2.  it 定义的测试用例(test case)
3.  测试代码
4.  断言几部分

说明：每个测试文件中可以有多个测试套件和测试用例。具体使用可以查看之前写的的 Mocha 的使用方法。

## Karma

基于 karma 测试常用的一些模块和配置

### 模块安装

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

### 配置

这里的配置主要关注的是`karma.conf.js`的相关配置。如果要使用 karma 和 mocha 最好通过`npm install karma-cli -g`全局安装`karma-cli`。[具体配置配置说明](http://karma-runner.github.io/2.0/config/configuration-file.html)

常用的几个字段

- browsers: 浏览器配置; 如果浏览器无法启动需要进行相关浏览器的配置。
- singleRun: 如果值为 true, 则在浏览器运行完测试后会自动退出关闭浏览器窗口。

注意:
设置自启动浏览器时候如果浏览器启动失败可能需要设置为`--no-sandbox`模式。

```json
{
  "browsers": ["Chrome", "ChromeHeadless", "ChromeHeadlessNoSandbox"],
  "customLaunchers": {
    "ChromeHeadlessNoSandbox": {
      "base": "ChromeHeadless",
      "flags": ["--no-sandbox"]
    }
  }
}
```

或者

```json
{
  "browsers": ["Chrome_travis_ci"],
  "customLaunchers": {
    "Chrome_travis_ci": {
      "base": "Chrome",
      "flags": ["--no-sandbox"]
    }
  }
}
```

接入 Travis-CI 参考配置

```.travis.yml
sudo: required
language: node_js
node_js:
  - '8'
+before_script:
  - 'sudo chown root /opt/google/chrome/chrome-sandbox'
  - 'sudo chmod 4755 /opt/google/chrome/chrome-sandbox'
  - npm install -g karma-cli
  - npm install
script:
  - npm run test
```
