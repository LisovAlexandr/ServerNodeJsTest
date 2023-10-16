/*import chalk from 'chalk'
import text from './testModule.js'
import path from 'path'
import {fileURLToPath} from 'url'
//const chalk = require("fix-esm").require("chalk")
//const chalk = require("chalk")
//const chalk = await import("chalk")
//console.log(chalk.green('hi node'))
//console.log("имя файла: ", __filename)
//вывод переменной из подключенного модуля
//console.log(text)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename)
console.log(__dirname)*/


//запускаем сервер
import http from "http"
//добавим на страницу фалы html
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req,res)=>{
  //console.log(req.url)
  //способ 1
  /*if (req.url === '/'){
    fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
      if(err){
        throw err
      }
      res.writeHead(200,{
    //тут можем определить тип текста-response
        'Content-Type':'text/html'
      })
      res.end(data)
    })
  }
  else if (req.url === '/contact'){
    fs.readFile(path.join(__dirname,'public','contact.html'),(err,data)=>{
      if(err){
        throw err
      }
      res.writeHead(200,{
    //тут можем определить тип текста-response
        'Content-Type':'text/html'
      })
      res.end(data)
    })
  }
  //res.end("<h1>Hello node js!!!!</h1>")
  */
  //способ 2
  
  let filePath = path.join("__dirname","public",req.url==="/"? "index.html" : req.url)
  //console.log(filePath)
  fs.readFile(filePath,(err,content)=>{
    if(err){
      fs.readFile(path.join(filePath,"public",'error.html'),(err,data)=>{
        if(err){
          res.writeHead(500)
          res.end('Error')
        }
        else{
          res.writeHead(200,{
            'Content-Type':'text/html'
            })
          res.end(data)
          }
      })
    }
    else{
      res.writeHead(200,{
        'Content-Type':'text/html'
      })
      res.end(content)
    }
  })
  res.end()
});

server.listen(3000,()=>{
  console.log('server работает...')
})