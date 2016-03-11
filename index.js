var hyperx = require('hyperx') // turns template tag output into the DOM builder API
var bel = require('bel') // turns DOM builder arguments into DOM elements
module.exports = hyperx(bel)
module.exports.update = require('morphdom') // efficiently diffs + morphs two DOM elements
