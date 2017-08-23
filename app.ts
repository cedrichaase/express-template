import container from './src/app/container/container';

const express = require('express');
const app = express();

// register middlewares
require('./src/app/middlewares/scope')(app, container);

// register the routes
require('./src/app/routes/user')(app);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
