const  { writeFile, writeFileSync} = require('fs')

 for ( let i = 0; i<10000; i++) {
    writeFileSync('./content/big.txt', `hello sam ${i}\n`, {flag : 'a'})
 }
 