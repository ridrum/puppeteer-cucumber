const {defineSupportCode} = require('cucumber');

console.log('-> CustomWorld')
function CustomWorld() {
  console.log('CustomWorld')
  this.integer = 0
}

defineSupportCode(({setWorldConstructor}) => {
  setWorldConstructor(CustomWorld)
})