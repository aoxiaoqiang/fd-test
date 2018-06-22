const assert = require('assert');

describe('测试套件描述', function () {
  it('测试用例描述: 1 + 2 = 3', function() {
    // 测试代码
     const result =1 + 2;
    // 测试断言
    assert.equal(result, 3);
  })
})