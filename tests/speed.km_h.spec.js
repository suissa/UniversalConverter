const expect = require(`chai`).expect
const category = __filename.split('/tests/')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = { base: 'km/h', to: 'm/min'}
const value = {
  '1': 16.67,
  '5': 83.33,
  '7': 116.67,
  '11': 183.33,
  '15': 250,
}

const converter = (val, base, to) => Number(unities[base][to](val))
const testType = (result) =>  expect(result).not.to.be.NaN
const testValue = (result, correctValue) =>  expect(result).to.equal(correctValue)
const getResult = (toTest) => converter(toTest, `${Unity.base}`, `${Unity.to}`)

const Tests = [ testType, testValue ]

const testUnity = (toTest) => 
  it(`${toTest}${Unity.base} para  ${value[toTest]}${Unity.to}`, () => 
    Tests.reduce( (value, test) => test( value.result,value.toTest ), 
      {result: getResult(toTest), toTest: value[toTest]})
  )

describe(`Unidade ${Unity.base} deve ser convertida para ${Unity.to}:`,  () => 
  Object.keys(value).map(testUnity))
