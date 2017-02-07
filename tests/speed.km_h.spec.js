const expect = require(`chai`).expect
const unities = require(`../unities/speed`)
const Unity = { base: 'km/h', to: 'm/min'}
const value = {
  '1': 16.67,
  '5': 83.33,
  '7': 116.67,
  '11': 183.33,
  '15': 250,
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
