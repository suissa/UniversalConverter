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

const testUnity = (toTest) => 
  it(`${toTest}${Unity.base} para  ${value[toTest]}${Unity.to}`, () => {
    const resultado = converter(toTest, `${Unity.base}`, `${Unity.to}`)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(value[toTest])
  })

describe(`Unidade ${Unity.base} deve ser convertida para ${Unity.to}:`,  () => 
  Object.keys(value).map(testUnity))
