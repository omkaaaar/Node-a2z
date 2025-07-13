const fs = require('fs')
const https = require('https')

console.log("hellllllllooooooooooooooooooooo");

var a = 100;
var b = 200;

https.get('https://dummyjson.com/products/1', (res)=>{
    console.log('Fetched daaataa');
})

setTimeout(()=>{
    console.log("result after 5 sec");
},5000)

fs.readFile("./file.txt","utf-8",(err, data)=>{
    console.log("File Data: ",data);
})

const multiply =(a,b)=>{
    return a*b;
}

var c = multiply(a,b)
console.log(c);
