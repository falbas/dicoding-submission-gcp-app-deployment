const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000

app.use('/assets', express.static(path.join(__dirname, 'src/assets')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(port)
console.log('Server started at http://localhost:' + port)
