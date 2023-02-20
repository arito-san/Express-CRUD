const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require("./routes/index.js");
const conn = require('./database/index.js');

//Serve para carregar as models.
const User = require('./models/user');

//configuração do serviço.
const port = 3000;
const app = express();

//middlewares.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

//realização da conexão.
conn
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.info(`server is running on port ${port}`);
        });
    })
