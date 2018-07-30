const myFunc = require('./src/index.js').myFunc

it('test', ()=>{
  expect( myFunc( 1 ) ).toBe( 1 )
})
