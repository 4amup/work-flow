const xlsx = require('node-xlsx').default

// Parse 数据源
let sourceFile_1 = xlsx.parse(`${__dirname}/data/test1.xls`)
let sourceFile_2 = xlsx.parse(`${__dirname}/data/test2.xls`)

console.log(sourceFile_1[0].data[22][4])
