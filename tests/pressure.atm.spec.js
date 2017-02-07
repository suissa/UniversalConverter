const expect = require(`chai`).expect
const category = __filename.split('/tests/')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = { base: 'atm', to: 'torr'}
const value = {
  '1': 760,
  '3': 2280,
  '5': 3800,
  '7': 5320,
  '11': 8360,
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
