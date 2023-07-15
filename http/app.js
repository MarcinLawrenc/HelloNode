const express = require('express')
const port = 8000

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) =>{
    res.render('index', {
        pageTitle: 'Node js',
        pageBody: 'hello node'
    })
})

app.get('/kontakt', (req, res) =>{
    res.send('Info FB PPBIT')
})


app.listen(port)