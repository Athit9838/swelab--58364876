const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hi 1234 '))

app.listen(port, () => console.log('app listening on port'+port))

