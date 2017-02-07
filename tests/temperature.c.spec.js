const expect = require(`chai`).expect
const category = __filename.split('/tests/')[1].split('.')[0]
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
const testTitle = `Unidade ${Unity.base} deve ser convertida para ${Unity.to}:`

const Tests = [ testType, testValue ]

const testUnity = (toTest) => 
  it(`${toTest}${Unity.base} para  ${value[toTest]}${Unity.to}`, () => 
    Tests.reduce( (value, test) => test( value.result,value.toTest ), 
      {result: getResult(toTest), toTest: value[toTest]})
  )

describe(testTitle,  () => Object.keys(value).map(testUnity))
