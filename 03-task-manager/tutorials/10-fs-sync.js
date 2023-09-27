const fs = require('fs')
console.log('start')
const { readFileSync, writeFileSync} = require('fs')

//reading the file
const first = readFileSync('./content/first.txt', "utf8")
const second = readFileSync('./content/second.txt', "utf8")
 
//writing the file
writeFileSync(
    "./content/result-sync.txt",
    `here is the result : ${first}, ${second}`, 
    {flag : 'a'}
 )
  console.log('am done with the tasks')
  console.log('starting the next one')



