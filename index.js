const express = require('express')
const path = require('path')
const PORT = 8000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.render('index.html'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
