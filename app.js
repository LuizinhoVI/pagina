const express = require('express');
const path = require('path');
const client = require('./conexao'); // Importa a configuração do banco de dados
// const db = require('./conexao'); // Importa a configuração do banco de dados

const app = express();
const port = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos (opcional)
app.use(express.static(path.join(__dirname, 'public')));



// Rota principal
app.get('/', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM usuarios'); // Substitua 'usuarios' pelo nome da sua tabela
        // const usuarios = result.rows; // Obtém os dados da consulta
        // console.log(result)
        const nome = result.rows;
        res.render('index', { nome });

    } catch (error) {
        console.error('Erro ao consultar dados:', error);
        res.status(500).send('Erro no servidor.');
    }
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
