const expect = require(`chai`).expect
const fs = require('fs')

const runMuthafuckingTests = (MODULE) => {
  const testUnity = (toTest) => 
    it(`${toTest}${MODULE.Unity.base} para  ${MODULE.value[toTest]}${MODULE.Unity.to}`, () => 
      MODULE.Tests.reduce( (value, test) => test( value.result,value.toTest ), 
        { result: MODULE.getResult(toTest), 
          toTest: MODULE.value[toTest] 
        })
    )

  describe(MODULE.testTitle,  () => Object.keys(MODULE.value).map(testUnity))
}

fs.readdirSync(__dirname)
    .filter( (file) => (file.startsWith('spec.') ) ? file  : false )
    .map( file => require('./'+file) )
    .map(runMuthafuckingTests)

