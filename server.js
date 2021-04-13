const express = require('express'); // import express; using expresss
const { uuid } = require('uuidv4');

const server = express();
 // middeleware
server.use(express.json())

 // HTTP
 // GET  (OBTER UM RECURSO JSON (java script Object Notation)) = READ
 // POST ( ENVIAR OU ADD UM RECURSO) = CREATE
 // PUT (ATUALIZAR UM RECURSO) = UPDATE
 // DELETE (APAGAR UM RECURSO) = DELETE

 // /? nome=Tulio   (informações passadas pela url) request.query
 // produto/1       (informações passadas também pela url) - request.params
 // corpo da mensagem - request.bory (JSON)  
 contatos = [];
server.get('/', function(request, response) {

    response.json(contatos);
})

server.get('/:id', function(request, response) {
    const id = request.params.id;
    const id = id;
    const result = contatos.filter(contato=>contato.id = id);
    response.json(result);
})

server.post('/', function(request, response) {
    const {nome, telefone} = request.body;

    contato = {
        id: uuid(),
        nome,
        telefone
    };

    contatos.push(contato);
    response.status(201).send();

})

server.listen(process.env.PORT || 3000);