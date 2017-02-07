const expect = require(`chai`).expect
const category = __filename.split('/tests/')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = { base: 'torr', to: 'atm'}
const value = {
  '1': 0.001315785918,
  '3': 0.003947357754,
  '5': 0.006578929590000001,
  '7': 0.009210501426,
  '11': 0.014473645098,
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
