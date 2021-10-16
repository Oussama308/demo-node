//CommonJs every file is a module (by defualt)   node uses commonjs
//Modules -Encapsulated Code only share minimum 

const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')
sayHi(names.oussema);
sayHi(names.jhon)
sayHi('kjnkj')

require('./7-mind-grenade')
 