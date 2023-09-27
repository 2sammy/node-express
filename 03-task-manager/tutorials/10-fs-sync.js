const fs = require('fs')
const { readFileSync, writeFileSync} = require('fs')
//reading the file
const first = readFileSync('./content/first.txt', "utf8")
const second = readFileSync('./content/second.txt', "utf8")
 
//writing the file
writeFileSync(
    "./content/result-sync.txt",
    `here is the result : ${first}, ${second}`, {flag : 'a'}
 )



