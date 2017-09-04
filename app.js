const xlsx = require('node-xlsx').default
const fs = require('fs')
const Excel = require('excel-class');
const path = require('path');

let excel = new Excel(path.join(__dirname,'/output/new.xlsx'))
// Parse 数据源
let sourceFile_1 = xlsx.parse(`${__dirname}/data/test1.xls`)
let sourceFile_2 = xlsx.parse(`${__dirname}/data/test2.xls`)

// 将需要的数据提取出来
let dataFilter_1 = sourceFile_1[0] // 取sheet1所有数据
                  .data // 取出数据，并列的name属性是sheet名
                  .slice(4, -1) // 取出从锅研所到末尾的所有数据
                  // .filter((value, index) => { // 将无效“本厂”数据行去掉
                  //   let delRow = [0, 1, 3, 7]
                  //   return delRow.indexOf(index) == -1
                  // })
                  .map((value, index) => { // 将取出的数据处理成需要的格式
                    return [value[1].trim(), value[6]] // 1是单位名称，trim去空格，6是当月消耗
                  })
                  .map((value, index) => {
                    return {name: value[0], number: value[1]}
                  })

// data2的数据以后再用，现在暂时不用了
// let dataFilter_2 = sourceFile_2[0] // 取sheet1所有数据
//                   .data // 取出数据，并列的name属性是sheet名
//                   .slice(4, 24) // 取出有效数据行
//                   .filter((value, index) => { // 将无效如“本厂”之类的数据过滤掉
//                     let delRow = [0, 1, 3, 7]
//                     return delRow.indexOf(index) == -1
//                   })
//                   .map((value, index) => { // 将数据处理成所需格式
//                     return [value[0].trim(), value[1]] // 1是单位名称，trim去空格，6是当月消耗
//                   })

// test data
excel.writeSheet('Sheet2',['name','number'], dataFilter_1).then(()=>{
  //do other things
});
