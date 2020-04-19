const assert = require('assert'),
  { greeting } = require('../index.js')

describe('greeting.js', function () {
  it('Returns the correct string', function () {
    assert.strictEqual(greeting(), 'Hello World!')
  })
})