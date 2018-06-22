const chai = require('chai');
chai.should();

describe('基础测试', () => {
  it('expect.js function ', () => {
    const foo = 'hello world';
    foo.should.be.a('string');
  })
})