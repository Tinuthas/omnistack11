const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        evento: 'Omnistack 11',
        aluno: 'Vinicius'
    })
})

app.listen(3333)