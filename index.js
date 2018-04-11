'use strict'
var React = require('react')

module.exports = r

function r () {
  var argumentsArray = Array.from(arguments)
  var x = argumentsArray[1]
  if (typeof x === 'string' || typeof x === 'number' || Array.isArray(x) || (typeof x === 'object' && Object.keys(x)[0] === '$$typeof')) {
    argumentsArray.splice(1, 0, {})
  }
  React.createElement.apply(this, argumentsArray)
}
