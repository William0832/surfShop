const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('surf shop')
})
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})
