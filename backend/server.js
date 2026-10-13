const express = require('express');
const cors = require('cors');
const app = express();
const PORT  = process.env.PORT || 3000

const usuarios = []

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT}`)
})

app.post('/cadastro', (req, res) => {
    usuarios.push(req.body)
    res.send('cadastro realizado com sucesso')
})

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})