const expect = require(`chai`).expect
const category = __filename.split('spec.')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = { base: 'c', to: 'f'}
const value = {
  '-100': -148,
  '0': 32,
  '25': 77,
  '100': 212,
}

const converter = (val, base, to) => Number(unities[base][to](val))
const testType = (result) =>  expect(result).not.to.be.NaN
const testValue = (result, correctValue) =>  expect(result).to.equal(correctValue)
const getResult = (toTest) => converter(toTest, `${Unity.base}`, `${Unity.to}`)
const titleTest = `Unidade ${Unity.base} deve ser convertida para ${Unity.to}:`

const Tests = [ testType, testValue ]

module.exports = {
  titleTest,
  value,
  unities,
  getResult,
  Unity,
  Tests
}