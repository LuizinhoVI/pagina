// db.js
const { Pool } = require('pg');

// Configurações de conexão (substitua com suas credenciais do Neon)
const pool = new Pool({
    host: 'ep-empty-pond-a5252op8.us-east-2.aws.neon.tech',// Por exemplo: 'db.neon.tech'
    database: 'cliente',     // Nome do seu banco de dados
    user: 'cliente_owner',                 // Seu usuário
    password: 'S12sqlucFfvD',               // Sua senha
    port: 5432,                          // Porta padrão do PostgreSQL
    ssl: {
      rejectUnauthorized: false, // Ajuste isso conforme necessário
  },

});

const query = (text, params) => {
    return pool.query(text, params);
};

module.exports = {
    query,
};