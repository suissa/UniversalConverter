const expect = require(`chai`).expect
const category = __filename.split('spec.')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = { 
  base: 'g',
   to: 'kg'
 }
const value = {
  '-5': -0.005,
  '0': 0,
  '1': 0.001,
  '5': 0.005,
  '7': 0.007,
}

const converter = (val, base, to) => Number(unities[base][to](val))
const testType = (result) =>  expect(result).not.to.be.NaN
const testValue = (result, correctValue) =>  expect(result).to.equal(correctValue)
const getResult = (toTest) => converter(toTest, `${Unity.base}`, `${Unity.to}`)
const testTitle = `Massa ${Unity.base} deve ser convertida para ${Unity.to}:`

const Tests = [ testType, testValue ]

module.exports = {
  testTitle,
  value,
  unities,
  getResult,
  Unity,
  Tests
}