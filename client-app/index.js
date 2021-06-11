'use strict';
const server = require('./server');
const { PORT } = require('./utils/constants');

server.listen(PORT, async () => {  
  console.log(`App listening on port ${PORT}`)
});