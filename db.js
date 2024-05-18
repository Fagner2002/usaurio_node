const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  // Endereço do servidor MySql
    user: 'root',       // Usuário do MySql
    password: 'toor',   // Senha do MySql
    database: 'project' // Nome do banco de dados
});

connection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:', err.stack);
        return;
    } 

    console.log('Conectado ao banco dados como ID' + connection.threadId);
});

module.exports = connection;