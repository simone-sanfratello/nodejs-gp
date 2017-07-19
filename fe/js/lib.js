function log (a, b, c, d, e, f, g) {
  let _log$ = $('#log')
  _log$.append('\n' +
    (a || '') +
    (b ? ' ' + b : '') +
    (c ? ' ' + c : '') +
    (d ? ' ' + d : '') +
    (e ? ' ' + e : '') +
    (f ? ' ' + f : '') +
    (g ? ' ' + g : '')
  )
  _log$.scrollTop(_log$.get(0).scrollHeight)
}
