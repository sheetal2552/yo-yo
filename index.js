var bel = require('bel') // turns template tag into DOM elements
var morphdom = require('morphdom') // efficiently diffs + morphs two DOM elements

module.exports = bel

module.exports.update = function (fromNode, toNode, opts) {
  if (!opts) opts = {}
  if (!opts.onBeforeMorphEl) opts.onBeforeMorphEl = copyEvents
  if (!opts.onBeforeMorphElChildren) opts.onBeforeMorphElChildren = copyEvents

  morphdom(fromNode, toNode, opts)

  function copyEvents (f, t) {
    var events = opts.events || defaultEvents
    for (var i = 0; i < events.length; i++) {
      var ev = events[i]
      if (t[ev]) f[ev] = t[ev]
    }
  }
}

var defaultEvents = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]
