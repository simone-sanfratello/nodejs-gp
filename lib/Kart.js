'use strict'

const Raspi = require('raspi-io')
const five = require('johnny-five')
const log = require('log-segment')
const isRoot = require('is-root')

const Wheel = require('./Wheel')

const Kart = function (pins) {
  let __board
  let __left, __right

  const setup = function () {
    log.info('Kart', '.setup')
    return new Promise((resolve, reject) => {
      if (!isRoot()) {
        reject(new Error('root priviliges required'))
        return
      }

      __board = new five.Board({
        io: new Raspi(),
        repl: false
      })

      __board.on('ready', () => {
        log.success('Kart', '.setup', 'board ready')
        __left = new Wheel(pins.left.forward, pins.left.backward)
        __right = new Wheel(pins.right.forward, pins.right.backward)
        resolve()
      })

      __board.on('error', (err) => {
        log.error('Kart', '.setup', 'board error', log.v('err', err))
        reject(err)
      })
    })
  }

  const forward = function () {
    log.info('Kart', '.forward')
    __left.forward()
    __right.forward()
  }

  const backward = function () {
    log.info('Kart', '.backward')
    __left.backward()
    __right.backward()
  }

  const left = function () {
    log.info('Kart', '.left')
    __left.forward()
    __right.backward()
  }

  const right = function () {
    log.info('Kart', '.right')
    __left.backward()
    __right.forward()
  }

  const stop = function () {
    log.info('Kart', '.stop')
    __left.stop()
    __right.stop()
  }

  this.setup = setup
  this.forward = forward
  this.backward = backward
  this.left = left
  this.right = right
  this.stop = stop

  Object.defineProperty(this, 'leftWheel', {
    get: function () { return __left }
  })
  Object.defineProperty(this, 'rightWheel', {
    get: function () { return __right }
  })
}

module.exports = Kart
