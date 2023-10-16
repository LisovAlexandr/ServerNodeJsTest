import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
//console.log(__filename)
const __dirname = path.dirname(__filename)
//console.log(__dirname)
//создание папки
/*fs.mkdir(path.join(__dirname,'test'),(err)=>{
  if(err){
    throw err
  }
  console.log('папка создана!')
})*/

const filePath = path.join(__dirname, 'test', 'text.txt')
//перезатрет сущ файл
/*fs.writeFile(filePath, 'hello inside txt', err=>{
  if (err){
    throw err
  }
  console.log('файл создан!')
})*/
/*
fs.appendFile(filePath, '\nдописали строку в файл', (err)=>{
  if(err){
    throw err
  }
  console.log("файл дополнен!")
})*/
fs.readFile(filePath,"utf-8",(err,content)=>{
  if (err){
    throw err
  }
  const data = Buffer
  console.log("Файл содержит: \n", content)
})
