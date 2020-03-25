const express = require('express')

const routes = express.Router()


routes.post('/users', (req, res) => {
    const body = req.body
    console.log(body)

    return res.json({
        evento: 'Omnistack 11',
        aluno: 'Vinicius Nich'
    })
})

module.exports = routes