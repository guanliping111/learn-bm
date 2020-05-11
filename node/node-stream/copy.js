const fs = require('fs');

function copy(sourceUrl,destUrl){
    // fs.readFile(sourceUrl, info,(err) => {
    //     if(!err) {
    //         fs.writeFile(sourceUrl, info,(err) => {
    //             if(!err) {
    //                 console.log('拷贝完毕');
    //             }
    //         })
    //     }
    // })

    const readSTream = fs.createReadStream(sourceUrl)
    const writeStream = fs.createWriteStream(destUrl)
    readSTream.pipe(writeStream);
}
copy('./readme.md','./copy.md');