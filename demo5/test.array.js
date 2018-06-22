describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect(-1).to.be([1, 2, 3].indexOf(-1));
    })
  })
})

describe('jQuery', function() {
  describe('$ is mean jQuery', function() {
    it('should return jQuery', function() {
      expect($).to.be(jQuery);
    })
  })
})