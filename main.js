// config

const PIN = {
  left: {
    forward: 'GPIO7',
    backward: 'GPIO8'
  },
  right: {
    forward: 'GPIO9',
    backward: 'GPIO10'
  }
}
const PORT = 80

// libraries

const express = require('express')
const path = require('path')
const log = require('log-segment')
const isRoot = require('is-root')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

if (!isRoot()) {
  log.panic('root priviliges required, run as sudo')
  process.exit(-1)
}

// kart

const Kart = require('./lib/Kart')
const kart = new Kart(PIN)

// static serve files
app.use(express.static(path.join(__dirname, 'fe')))

// start web server
http.listen(PORT, function () {
  log.success('http', 'listening on', PORT)

  kart.setup()
    .then(() => {
      log.success('kart', 'ready to run')
    })
    .catch((err) => {
      log.panic('kart', 'error on kart.setup', log.value('err', err))
      process.exit(-1)
    })
})

// on events, relay to pi
io.on('connection', function (socket) {
  log.info('socket', 'user connected')

  socket.emit('message', 'ack')

  socket.on('command', function (cmd) {
    log.info('socket', 'command received', cmd)
    switch (cmd) {
      case 'forward':
        kart.forward()
        break
      case 'backward':
        kart.backward()
        break
      case 'left':
        kart.left()
        break
      case 'right':
        kart.right()
        break
      case 'stop':
        kart.stop()
        break
    }
    /** *** kart API ***
    kart.forward()
    kart.backward()
    kart.right()
    kart.left()
    kart.stop()
    */
  })

  socket.on('disconnect', function () {
    log.info('socket', 'user disconnected')
  })
})
