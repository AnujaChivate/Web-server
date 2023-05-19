//const path = require('path')
import path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Base file name
console.log(`Base file name: ${path.basename(__filename)}`)

// Directory name
console.log(`Directory name: ${path.dirname(__filename)}`)

// File extension
console.log(`File extension: ${path.extname(__filename)}`)

// Create path object
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))