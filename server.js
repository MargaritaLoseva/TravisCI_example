const connect = require('connect');
const serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(9090, () => {
    console.log('Server running on 9090...');
});