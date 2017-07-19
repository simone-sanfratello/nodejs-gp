/* global $ io log */
$(document).ready(function () {
  const socket = io()

  // write here!

  // example
  $('#command-forward').on('click', function (e) {
    e.preventDefault()
    log('command-forward.click')
    socket.emit('command', 'forward')
  })

  $('#command-backward').on('click', function (e) {
    log('command-backward.click')
  })

  $('#command-left').on('click', function (e) {
    log('command-left.click')
  })

  $('#command-right').on('click', function (e) {
    log('command-right.click')
  })

  socket.on('message', function (message) {
    log('received', message)
  })
})
