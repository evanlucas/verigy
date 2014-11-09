module.exports = function(email) {
  if (!email) return null
  if ('string' !== typeof email) return null
  var domain
    , username

  email = email.toLowerCase()
  email = email.trim()

  if (!~email.indexOf('@')) return null

  var splits = email.split('@')
  if (splits.length !== 2) {
    return null
  }
  username = splits[0]
  domain = splits[1]

  if (!~domain.indexOf('.')) {
    return null
  }

  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    username = username.replace(/\./g, '')
  }

  if (domain === 'yahoo.com') {
    if (~username.indexOf('-')) {
      var splits = username.split('-')
      username = splits[0]
    }
  }

  if (~username.indexOf('+')) {
    var splits = username.split('+')
    var regUser = splits[0]
    username = regUser
  }

  return [username, domain].join('@')
}
