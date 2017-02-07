# Unidades de Medida

Um dos conteúdos mais básicos que encontramos em nossos estudos é a conversão de unidades de medida.

Como um bom programador isso nunca deverá ser problema para nós pois é apenas uma regrinha de três.

![unidades de medida](http://i.imgur.com/0sZd2iX.png)
*fonte: [https://en.wikipedia.org/wiki/Gas_constant](https://en.wikipedia.org/wiki/Gas_constant)*

## Exercício

Dada a imagem acima correlacione a unidade `erg` com o `J`, então responda a pergunta:

> Precisamos de quantos Joules para ter a mesma quantidade de ` 200 erg`s?

**Nesse exercício você não precisa implementar a função, apenas demonstar seu cálculo.**

```
8.3144598(48)   J K−1 mol−1
8314.4598(48)   J K−1 kmol−1
8.3144598(48)×10^7   erg K−1 mol−1
```

## Conversor Universal


Estava eu bem de boas ajudando um aluno meu, do Ensino Médio, com conversão de 
unidades de temperatura aqui: [https://gist.github.com/gkal19/fe07921c562b85818d432d385a662f81](https://gist.github.com/gkal19/fe07921c562b85818d432d385a662f81).

Porém como ele não fez o que pedi ali no comentário, eu mesmo o fiz para demonstrar.

Primeiramente precisamos definir a estrutura de dados que precisamos para consultar 
as conversōes de unidades, por exemplo:

```js

module.exports =  { 
  'c': {
    'name': 'Celsius',
    'f': (val) => (val * 1.8  + 32),
    'k': (val) => (val + 273.15)
  },
  'f': {
    'name': 'Fahreneit',
    'c': (val) => (val  - 32) / 1.8,
    'k': (val) => (val * 1.8) - 459.67
  },
  'K': {
    'name': 'Kelvin',
    'c': (val) => (val  - 273.15),
    'f': (val) => (val * 1.8) - 459.67
  }
}

```


> **Veja como ficou fácil criar um Conversor Universal de Unidades de Medida!**

```js

const unities = require('./unities.js')

const converter = (val, base, to) => Number(unities[base][to](val))

```

> **Por que esse conversor é universal tio Suissa?**

> - Porque eu sou muito malandro! LOL


Brincadeiras a parte, essa generalização da conversão de qualquer unidade de medida 
deve-se à função cadastrada no Objeto de Unidades `unities.js`.

Exemplo:

```js

'c': {
  'name': 'Celsius',
  'f': (val) => (val * 1.8  + 32),
  'k': (val) => (val + 273.15)
}

// chamando a função para converter ela pegará o Objeto assim
['c']['f'](100)

```


## Testes


Iniciei meus testes como (quase) todo mundo, assim:

```js

const expect = require('chai').expect

const unities = require('../unities/speed')

const converter = (val, base, to) => Number(unities[base][to](val))

describe('Unidade base km/h',  () => {
  it('Deve converter 1km/h para  16.67m/min', () => {
    const resultado = converter(1, 'km/h', 'm/min')
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(16.67)
  })

  it('Deve converter 5km/h para  83.33m/min', () => {
    const resultado = converter(5, 'km/h', 'm/min')
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(83.33)
  })

  it('Deve converter 7km/h para  116.67m/min', () => {
    const resultado = converter(7, 'km/h', 'm/min')
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(116.67)
  })

})

```

Fui refatorando-o até chegar nesse código genérico que funciona para todas 
as unidades de medidas que existirão nessa *lib*:

```js

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

```

