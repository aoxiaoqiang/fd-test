/**
 * 例子说明
 * 1. 安装should模块，使用should断言库。在karma.conf.js配置中的files添加should.js的引用。
 * 2. 配置karma.conf.js, 使用Firefox作为测试浏览器；因此需要安装karma-firefox-launcher模块进行支持
 * 3. 使用mocha作为测试框架。
 */
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      (-1).should.equal([1, 2, 3].indexOf(4));
    });
  });
});