'use strict'

const five = require('johnny-five')
const log = require('log-segment')

const Wheel = function (pinForward, pinBackward) {
  let __pinFW, __pinBW

  const __init = function () {
    __pinFW = new five.Pin(pinForward)
    __pinBW = new five.Pin(pinBackward)
  }

  const forward = function () {
    log.info('Wheel', '.forward')
    __pinBW.write(0)
    __pinFW.write(1)
  }

  const backward = function () {
    log.info('Wheel', '.backward')
    __pinFW.write(0)
    __pinBW.write(1)
  }

  const stop = function () {
    log.info('Wheel', '.stop')
    __pinFW.write(0)
    __pinBW.write(0)
  }

  __init()

  this.forward = forward
  this.backward = backward
  this.stop = stop
}

module.exports = Wheel
