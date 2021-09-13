const express = require('express');
const cors = require('cors');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use(require('./routes/index.js'));


app.listen(4002);
console.log('server en el puerto 4002');