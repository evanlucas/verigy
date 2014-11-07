#!/usr/bin/env node

var fs = require('fs')
  , args = process.argv.splice(2)

if (!args.length) {
  return usage(1)
}

var email = args.shift()

var helps = ['--help', '-h', '-H']

if (~helps.indexOf(email)) {
  return usage(0)
}

var verigy = require('../')

var out = verigy(email)

if (!out) {
  console.error('not valid:', email)
  process.exit(1)
}

console.log(email, '=>', out)

function usage(code) {
  var rs = fs.createReadStream(__dirname + '/usage.txt')
  rs.pipe(process.stdout)
  rs.on('close', function() {
    if (code) process.exit(code)
  })
}
