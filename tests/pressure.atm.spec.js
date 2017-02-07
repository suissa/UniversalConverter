const expect = require(`chai`).expect
const category = 'pressure'
const unities = require(`../unities/${category}`)
const Unity = { base: 'atm', to: 'torr'}
const value = {
  '1': 760,
  '3': 2280,
  '5': 3800,
  '7': 5320,
  '11': 8360,
}

const converter = (val, base, to) => Number(unities[base][to](val))

const testUnity = (toTest) => 
  it(`${toTest}${Unity.base} para  ${value[toTest]}${Unity.to}`, () => {
    const resultado = converter(toTest, `${Unity.base}`, `${Unity.to}`)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(value[toTest])
  })

describe(`Unidade ${Unity.base} deve ser convertida para ${Unity.to}:`,  () => 
  Object.keys(value).map(testUnity))
