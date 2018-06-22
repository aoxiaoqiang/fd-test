const assert = require('assert');

// 待测试方法
function rNumber(min, max) {
  return (Math.random() * (max - min) + min) >> 0;
}

describe('随机数方法 rNumber 测试', function () {
  it('随机输出一个3-5之间(包含3不含5)的整数', function() {
    const min = 3;
    const max = 5;
    const expectNum = rNumber(min, max);
    assert(expectNum >= min && expectNum < max);
  })
})