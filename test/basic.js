'use strict'

const Kart = require('../lib/Kart')
const tap = require('tap')
const TIMER = 500

// new kart
const pins = {
  left: {
    forward: 'GPIO7',
    backward: 'GPIO8'
  },
  right: {
    forward: 'GPIO9',
    backward: 'GPIO10'
  }
}

const _kart = new Kart(pins)

tap.test('Kart.setup', (test) => {
  test.plan(1)

  _kart.setup()
    .then(() => {
      test.pass('Kart.setup')
    })
    .catch((err) => {
      test.fail('Kart.setup', err)
    })
}).then((tap) => {
  return tap.test('Kart.leftWheel.forward', (test) => {
    test.plan(1)

    _kart.leftWheel.forward()
    setTimeout(() => {
      _kart.leftWheel.stop()
      test.pass('Kart.leftWheel.forward')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.leftWheel.backward', (test) => {
    test.plan(1)

    _kart.leftWheel.backward()
    setTimeout(() => {
      _kart.leftWheel.stop()
      test.pass('Kart.leftWheel.backward')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.leftWheel.stop', (test) => {
    test.plan(1)

    _kart.leftWheel.forward()
    setTimeout(() => {
      _kart.leftWheel.stop()
      test.pass('Kart.leftWheel.stop')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('Kart.rightWheel.forward', (test) => {
    test.plan(1)

    _kart.rightWheel.forward()
    setTimeout(() => {
      _kart.rightWheel.stop()
      test.pass('Kart.rightWheel.forward')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.rightWheel.backward', (test) => {
    test.plan(1)

    _kart.rightWheel.backward()
    setTimeout(() => {
      _kart.rightWheel.stop()
      test.pass('Kart.rightWheel.backward')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.rightWheel.stop', (test) => {
    test.plan(1)

    _kart.rightWheel.forward()
    setTimeout(() => {
      _kart.rightWheel.stop()
      test.pass('Kart.rightWheel.stop')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('Kart.forward', (test) => {
    test.plan(1)

    _kart.forward()
    setTimeout(() => {
      _kart.stop()
      test.pass('Kart.forward')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.backward', (test) => {
    test.plan(1)

    _kart.backward()
    setTimeout(() => {
      _kart.stop()
      test.pass('Kart.backward')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('Kart.left', (test) => {
    test.plan(1)

    _kart.left()
    setTimeout(() => {
      _kart.stop()
      test.pass('Kart.left')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.right', (test) => {
    test.plan(1)

    _kart.right()
    setTimeout(() => {
      _kart.stop()
      test.pass('Kart.right')
    }, TIMER)
  })
}).then((tap) => {
  return tap.test('kart.stop', (test) => {
    test.plan(1)

    _kart.forward()
    setTimeout(() => {
      _kart.stop()
      test.pass('Kart.stop')
    }, TIMER)
  })
}).then((tap) => {
  // well done
  process.exit(0)
}).catch(tap.threw)
