var test = require('tape')
var yo = require('./')

test('event attribute gets updated', function (t) {
  t.plan(2)
  function a () { t.ok(true, 'called a') }
  function b () { t.ok(true, 'called b') }
  var el = yo`<button onclick=${a}>hi</button>`
  el.click()
  yo.update(el, yo`<button onclick=${b}>hi</button>`)
  el.click()
})

test('event attribute gets removed', function (t) {
  t.plan(1)
  function a () { t.ok(true, 'called a') }
  var el = yo`<button onclick=${a}>hi</button>`
  el.click()
  yo.update(el, yo`<button>hi</button>`)
  el.click()
})
