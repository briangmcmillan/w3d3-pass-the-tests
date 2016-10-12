var moment = require('moment')

//String
// var word = '     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.      '

//STRING METHODS//
//console.log(word.length)
// console.log(word.toUpperCase())
//console.log(word.toLowerCase())
//console.log(word.trim())
//word = word.toUpperCase()
//word = word.trim()
//word = word.toLowerCase()
//word = word.toUpperCase().trim().toLowerCase()


var word = 'Pizza Is Amazing'
// word = word.repeat(20)
// word = 'Pizza Is Amazing'.slice(9,16)//(starting character #, continue counting until ending character #)
// // word = 'Pizza Is Amazing'.substr(9, 7)
word = word.split(' ')//Splits the words up into an array. The space between the single parenthesis counts the # of spaces between the words and console logs that.
console.log(word)
//
// var word = 'City of Seattle'
//
// var indianaIndexStart = word.indexOf('Indiana')
// var whatIsTheLetter = word.charAt(8)
// var isItIndianapolis = word.includes('Seattle')
// word = word.replace('Seattle', 'Indianapolis')
//
// //console.log(word)
//
//
// var phoneNumber = 'Phone Number 317-489-9184 888-389-3489'
// var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
// var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')//after the last green slash you can input i(case insensitive) or g(greedy). These are called flags.
// // console.log(hasPhoneNumber)//Use square bracket [0] when you use match. (above)
//
//
//
//
//Number
// var number = Number('1')
// number = number + (number * 50)
// number++//number = number + 1 is the same
// console.log(number)
// //Number End
//
//
// //Math
// var price = 12.01
// //var priceRounded = Math.ceil(price)//Have to refer to the Math based object. The yellow Math. Instead of ceil can do round
// var priceRounded = Math.floor(price)
// //console.log(priceRounded)
//
// //console.log(Math.PI)
//
// // var randomNumber = Math.random()
// var randomNumber = Math.round(Math.random() * 10)
// //console.log(randomNumber)
//
// var price = 12.045
// var cents = String(price).split('.')[1].substr(0,2)
// var dollars = String(price).split('.')[0]
// price = dollars + '.' + cents
// // console.log(price)
//
// //console.log(Number('12.045') === 12.045)
// //Math End
//
//
// //Date
// var today = new Date()
// //console.log(today)
//
// var yesterday = moment().subtract(2400, 'seconds')
// //console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))
// //Date End
//
//Object
// var pizza = Object()
// var pie = {
//     //Needs a property and value, ex.) property: 'value',
//     ingredients: 'stuff',
//     meat: 'pepperoni',
//     cheese: 'mozzarella',
//     price: 14.99,
//     priceRounded: Math.round(14.99)
// }//This is the same exact thing as writing var pizza = Object()
// console.log(pie.price)
//Object End
//
// //Array
// var ingredients = [
//     //does not need a property. Just a value. ex.) 'value',
//     'meat',
//     'cheese',
//     'sauce',
//     'spices',
//     'crust',
//     12,
//     true,
//     moment().format('MM/DD/YYYY'),
//     {
//         sausage: 'mystery'
//     }
// ]
// console.log(ingredients)
// //Array End
//
//
//
// var name = String('Brian')
// var name2 = 'Brian'
//
// // console.log (name === name2)
//
//
// var number = Number(1)
// var boolean = Boolean(true)
//
//
//
//
// function isNull(value) {
//     return value === null
// }
