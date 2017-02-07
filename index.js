const unities = require('./unities')


const converter = (val, base, to) => Number(unities[base][to](val))

// console.log('converter 0c => k', converter(0, 'K', 'f'))
// console.log('converter 20c => k', converter(20, 'K', 'f'))
// console.log('converter 100c => k', converter(100, 'K', 'f'))


// console.log('converter 0c => f', converter(0, 'c', 'f'))
// console.log('converter 20c => f', converter(20, 'c', 'f'))
// console.log('converter 100c => f', converter(100, 'c', 'f'))


// console.log('converter 1cal => J', converter(1, 'cal', 'J'))
// console.log('converter 10cal => J', converter(10, 'cal', 'J'))



// console.log('converter 1J => cal', converter(1, 'J', 'cal'))
// console.log('converter 5J => cal', converter(5, 'J', 'cal'))

// console.log('converter 1torr => atm', converter(1, 'torr', 'atm'))
// console.log('converter 1atm => torr', converter(1, 'atm', 'torr'))
// console.log('converter 1Pa => atm', converter(1, 'Pa', 'atm'))


// console.log('converter 1N => kgf', converter(1, 'N', 'kgf'))
// console.log('converter 4N => kgf', converter(4, 'N', 'kgf'))


//console.log('converter 1km/h => m/min', converter(1, 'km/h', 'm/min'))
//console.log('converter 5km/h => m/min', converter(5, 'km/h', 'm/min'))

//console.log('converter -100 L => mL', converter(-100, 'L', 'mL'))
//console.log('converter 11 mL => L', converter(0.011, 'mL', 'L'))

//console.log('converter -10 kg => g', converter(-10000, 'kg', 'g'))
//console.log('converter 5 g => kg', converter(0.005, 'g', 'kg'))

console.log('converter 5 s => min', converter(300, 's', 'min'))
console.log('converter -5 min => s', converter(-300, 'min', 's'))
console.log('converter 7 min => h', converter(0.116667, 'min', 'h'))