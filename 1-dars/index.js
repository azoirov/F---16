// // Imports
// const logger = require("./log");

// // console.log(logger)

// // Use imported function
// // logger("Logger function");

// // console.log("Hello World!")

// // major minor patch
// // 1.0.0

// // Build in Modules
// // os path fs http event..

// // PATH
// const path = require("path");

// // __filename
// // __dirname

// // console.log(__dirname)

// // path.resolve
// // console.log(path.resolve("./logger.js"))

// // join normalize
// // console.log(path.normalize("../1-dars/../1-dars/index.js"))

// // join
// let newPath = path.join(__dirname, "logger.js");
// // console.log(newPath)
// // console.log(path)

// // FS - File System
// const fs = require("fs").promises;
// // Sync
// // console.log(fs.readdirSync)
// // let res = fs.readdirSync("./", function(err, files) {
// //     if(err) {
// //         throw new Error(err)
// //     } else {
// //         console.log(files)
// //     }
// // })

// // console.log(res)

// // Async
// async function test() {
//   // ....
// }

// // await test()
// // ;(function(){})()
// // ;(async function () {
// //     let res = await fs.readdir(path.join(__dirname), function(err, files) {
// //         if(err) {
// //             throw new Error(err)
// //         } else {
// //             console.log(files)
// //         }
// //     })
// //     console.log(res)
// // })()

// // Read File
// // ;(async () => {
// //     let response = await fs.readFile("./logger.js", {encoding: "utf8"})
// //     console.log(response)
// // })()

// // Write File
// // ;(async () => {
// //     let response = await fs.writeFile("./logger.js", "console.log('written by fs')")
// //     console.log(response)
// // })()

// // Append File
// // ;(async () => {
// //     await fs.appendFile("./logger.js", "// written by fs");
// // })()

// // Rename
// // "./logger.js", "./log.js"
// // ;(async () => {
// //     await fs.rename("./logger.js", "./log.js")
// // })()

// // Unlink - remove
// // ;(async () => {
// //     await fs.unlink("./log.js")
// // })()
const db = require("./db");

async function addNewUserToDatabase(name, phone, __dirname) {
  let data = await db.getData(__dirname);

  await db.addUser(name, phone, data, __dirname);
}

(async () => {
  console.log("dasda", __dirname);
  await addNewUserToDatabase("Asadbek", "998998211744", __dirname);
})();

module.exports = addNewUserToDatabase;

// addNewUserToDatabase("name", "phone", __dirname);
