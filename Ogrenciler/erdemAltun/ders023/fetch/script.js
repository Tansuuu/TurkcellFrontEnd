// function getTextFile() {
//   fetch("ornek.txt")
//   .then((Response) => Response.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
// }

// function getJsonFile () {
//   fetch("user.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
// }
// getJsonFile()

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
// }

// getApi()

// class Request {
//   get(url) {
//     return new Promise((resolve, reject)=>{
//       fetch(url)
//       .then((response) => response.json())
//       .catch((err) => reject(err))
//     })
//   }
// }

// post(url, data) {
//   return new Promise ((resolve, reject)=>{
//     fetch(url,{
//       method:"POST",
//       body:JSON.stringify(data),
//       headers:{"content-type": "application:json;"}
//     })
//     .then((response)=> response.json())
//     .then((data)=> resolve(data))
//     .catch((err)=> reject(err))
//   })
// }