import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// // Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err
//         console.log('Folder created..')
// })

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err
//         console.log('File written to..')
// })

// File append
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Hello Again', err => {
    if (err) throw err
        console.log('File appended to..')
})

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if (err) throw err
        console.log('File renamed...')
    }
)