

const { hello, bye } = require('./App.js');

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello')
  })
})