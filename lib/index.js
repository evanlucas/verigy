module.exports = function(email) {
  if (!email) return null
  var domain
    , username

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

  username = username.replace(/\./g, '')

  if (~username.indexOf('+')) {
    var splits = username.split('+')
    var regUser = splits[0]
    username = regUser
  }

  return [username, domain].join('@')
}
