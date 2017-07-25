/* global $ io log */
$(document).ready(function () {
  const socket = io()

  $('#command-forward').on('mousedown touchstart', function (e) {
    e.preventDefault()
    log('command-forward.mousedown|touchstart', 'forward')
    socket.emit('command', 'forward')
  })
  $('#command-forward').on('mouseup touchend', function (e) {
    e.preventDefault()
    log('command-forward.mouseup|touchend', 'stop')
    socket.emit('command', 'stop')
  })

  $('#command-backward').on('mousedown touchstart', function (e) {
    e.preventDefault()
    log('command-backward.mousedown|touchstart')
    socket.emit('command', 'backward')
  })
  $('#command-backward').on('mouseup touchend', function (e) {
    e.preventDefault()
    log('command-backward.mouseup|touchend', 'stop')
    socket.emit('command', 'stop')
  })

  $('#command-left').on('mousedown touchstart', function (e) {
    e.preventDefault()
    log('command-left.mousedown|touchstart')
    socket.emit('command', 'left')
  })
  $('#command-left').on('mouseup touchend', function (e) {
    e.preventDefault()
    log('command-left.mouseup|touchend', 'stop')
    socket.emit('command', 'stop')
  })

  $('#command-right').on('mousedown touchstart', function (e) {
    e.preventDefault()
    log('command-right.mousedown|touchstart')
    socket.emit('command', 'right')
  })
  $('#command-right').on('mouseup touchend', function (e) {
    e.preventDefault()
    log('command-right.mouseup|touchend', 'stop')
    socket.emit('command', 'stop')
  })

  $('body').on('keydown', function (e) {
    e.preventDefault()
    log('body.keydown', 'key')
    switch (e.key) {
      case 'ArrowUp':
        socket.emit('command', 'forward')
        break
      case 'ArrowDown':
        socket.emit('command', 'backward')
        break
      case 'ArrowLeft':
        socket.emit('command', 'left')
        break
      case 'ArrowRight':
        socket.emit('command', 'right')
        break
    }
  })

  $('body').on('keyup', function (e) {
    e.preventDefault()
    log('body.keyup', 'stop')
    socket.emit('command', 'stop')
  })

  socket.on('message', function (message) {
    log('received', message)
  })
})
