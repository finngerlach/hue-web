const express = require('express')
const app = express()

const config = require('config')
const port = config.get('port')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
