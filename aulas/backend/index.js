const express = require('express')

const app = express()

app.use(express.json())

/**
 * Rota / Recurso
 */

 /**
  * Metodo HTTP:
  * 
  * GET: Buscar uma informacao
  * POST: Criar uma informacao no backend
  * PUT: Alterar uma informacao
  * DELETE: Deletar uma informacao
  * 
  * */


/**
 * Tipos de parametros:
 * 
 * Query: Paramentros noemados enviados na rota apos ? (filtros, paginacao)
 * Route Params: Utilizados para identificar recursos
 * Request Body: Corpo da requisicao, criar ou alterar recurso
 */
app.post('/users', (req, res) => {
    /*const params = req.query
    console.log(params)*/
    /*const params = req.params
    console.log(params)*/
    const body = req.body
    console.log(body)

    return res.json({
        evento: 'Omnistack 11',
        aluno: 'Vinicius Nich'
    })
})

app.listen(3333)