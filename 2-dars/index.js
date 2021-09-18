// // Promise - Async Await 
// // FETCH 

// // PENDING
// // FULFILLED

// // RESOLVE
// // REJECT

// let posts = [
//     {
//         title: "First Post"
//     },
//     {
//         title: "Second Post"
//     }
// ]

// function getPosts() {

//     let output = ``;

//     posts.forEach(post => {
//         output += `<li>${post.title}</li>`
//     });

//     document.querySelector("ul#output").innerHTML = output
// }

// function addPost(title, callback) {

//     let error = true

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({
//                 title
//             })

//             if(!error) {
//                 resolve(posts)
//             } else {
//                 reject("AN ERROR OCURED")
//             }
//         }, 2000)
//     })

//     return promise
// }

// document.querySelector("button#getPosts").addEventListener("click", e => {
//     addPost("Third Post", getPosts)
//         .then(function(posts) {
//             getPosts()
//         })
//         .catch(function(error) {
//             console.log(error)
//         })
// })

// OS module
const os = require("os");

let freemem = os.freemem();
let totalmem = os.totalmem();
let userInfo = os.userInfo();
let uptime = os.uptime();

// console.log("Free Memory", freemem)
// console.log("Total Memory", totalmem)
// console.log("Userinfo", userInfo)
// console.log("This laptop is working until", uptime)

// Event

const Logger = require("./logger")

const logger = new Logger()

logger.log()

setTimeout(function() {
    logger.emit("messageLogged");
}, 2000)
