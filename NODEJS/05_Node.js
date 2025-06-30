/*      FILE HANDLING 

we use fs module - > file system
*/

const fs = require('fs')

// writing file - in current dirc write a file test.txt and write content 
// this is synchromous
// fs.writeFileSync('./test.txt', 'hey there')


// Async
// fs.writeFile('./test.txt', 'hey there Asycn', (err)=>{console.log(err);
// })

// which one to use?


// READING --

/* 
reading file - sync 
const res = fs.readFileSync('./contact.txt', 'utf-8')
console.log(res);

asycn - it does not return anything
fs.readFile('./contact.txt', 'utf-8', (err, res) =>{
    if(err){
        console.log('error', err);    
    }
    else{
        console.log(res);
        
    }
})
*/

// APPEND -  

// it doesn not overwrite like write rather append data

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString()) // appending the date 
fs.appendFileSync("./test.txt",'hey there\n')
fs.appendFileSync("./test.txt", 'i am appending new data')


fs.cpSync('./test.txt', './copy.txt')

// delete
fs.unlinkSync('./copy.txt')

// we can get stats for a file

// to make a dir
// fs.mkdirSync("my-docs")
// removing dir
// fs.rmdirSync("my-docs")

// creating a dir with sub dir
// fs.mkdirSync("my-docs/1/2", {recursive: true})

// If the directory is non-empty and you want to delete it and its contents,
// you can use the fs-extra package, which provides a removeSync() function to delete both files and directories:

const fs2 = require('fs-extra');

fs2.removeSync('my-docs')