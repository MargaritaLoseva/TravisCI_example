import connect from 'connect';
import serve-static from 'serve-static';

connect().use(serveStatic(__dirname)).listen(9090, () => {
    console.log('Server running on 9090...');
});