// db.js
const { Pool } = require('pg');

// Configurações de conexão (substitua com suas credenciais do Neon)
const pool = new Pool({
    host: process.env.PGHOST,// Por exemplo: 'db.neon.tech'
    database: process.env.PGDATABASE,     // Nome do seu banco de dados
    user: process.env.PGUSER,                 // Seu usuário
    password: process.env.PGPASSWORD,               // Sua senha
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