const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const milddlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(milddlewares);
server.use(router);

server.listen(port)