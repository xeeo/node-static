var connect = require('connect'),
    serveStatic = require('serve-static'),
    port = process.env.PORT || 3001;
console.log('static server on port ' + port);
connect().use(serveStatic(__dirname)).listen(port);
