var should = require('should')
  , verigy = require('../')

describe('verigy', function() {
  it('should return email if regular email', function() {
    var email = 'evan@gmail.com'
    var o = verigy(email)
    o.should.equal(email)
  })

  it('should strip out periods', function() {
    var email = 'evan.lucas@gmail.com'
    var o = verigy(email)
    o.should.equal('evanlucas@gmail.com')
  })

  it('should strip out correct username', function() {
    var email = 'evanlucas+blah@gmail.com'
    var o = verigy(email)
    o.should.equal('evanlucas@gmail.com')
  })

  it('should strip out periods and correct username', function() {
    var email = 'evan.lucas+blah@gmail.com'
    var o = verigy(email)
    o.should.equal('evanlucas@gmail.com')
  })

  it('should return null if !email', function() {
    var o = verigy(null)
    should.not.exist(o)
  })

  it('should return null if more than one @', function() {
    var email = 'evan.lucas@blah@gmail.com'
    var o = verigy(email)
    should.not.exist(o)
  })

  it('should return null if no @', function() {
    var o = verigy('evanlucas')
    should.not.exist(o)
  })

  it('should return null if invalid domain', function() {
    var o = verigy('evanlucas@gmailcom')
    should.not.exist(o)
  })
})
