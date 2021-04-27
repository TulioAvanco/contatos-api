const Pool = require('pg').Pool;

const pool = new Pool({
user:'hbdgapgmshoorm',
password:'b59b9cd7b35f7d93884b1b91ba198936e4cb711f1fc8fdc279ea3ce6dd80cd1a',
host:'ec2-52-1-115-6.compute-1.amazonaws.com',
database:'dalvmdpm1aomsn',
port:'5432',
ssl: {rejectUnauthorized: false},
})


// const script =
//  `CREATE TABLE IF NOT EXISTS cotatos
//  (
//      ID serial primary key,
//      nome varchar(60) not null,
//      telefone varchar(20) not null
//  )
// `;


// // para executar comando "node database.js"
// pool.query(script, function(error, result){
//     if (error)
//     throw error;

//     console.log('Tabela criada com sucesso.');
// })

module.exports = {
    async create(nome, telefone) {
        try{
        const sql = 'INSERT INTO cotatos (nome, telefone) VALUES ($1, $2)';
        const result = await pool.query(sql,[nome,telefone]);
        return result.rows;
        }catch(error){
            console.log(error);
            return-1;
        }
        
    },

    async read() {
        const sql = `SELECT * FROM cotatos order by nome`;
        const result = await pool.query(sql);
        return result.rows;
    },

     async find(id) {
        const sql = `SELECT * FROM cotatos WHERE ID = $1 `;
        const result = await pool.query(sql, [id]);
        return result.rows;
    },

     async update(id, nome, telefone) {
        const sql = `UPDATE cotatos SET nome = $1, telefone = $2 WERE ID = $3`;
        const result = await pool.query(sql, [nome, telefone, id]);
        return result.rows;
    },

     async update(id) {
        const sql = `DELETE FROM contatos WHERE ID = $1`;
        const result = await pool.query(sql, [id]);
        return result.rows;
    }
    



}