const express = require('express')
const http = require('http')

const port = process.env.PORT || 3000
const ip = 'localhost'

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) =>{
    res.send(__dirname + '/index.html')
})

server.listen(port, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})