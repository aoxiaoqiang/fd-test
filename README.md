# 前端测试

## mocha

[mocha基础使用](https://www.jianshu.com/p/27a2daffb10c)

实例

```javascript
const assert = require('assert');

describe('测试套件描述', function () {
  it('测试用例描述: 1 + 2 = 3', function() {
    // 测试代码
     const result =1 + 2;
    // 测试断言
    assert.equal(result, 3);
  })
})
```

Mocha测试用例主要包含下面几部分:

1. describe定义的测试套件(test suite)
2. it定义的测试用例(test case)
3. 测试代码
4. 断言几部分

说明：每个测试文件中可以有多个测试套件和测试用例。具体使用可以查看之前写的的 Mocha的使用方法。