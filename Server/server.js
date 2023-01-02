const express = require('express');
const routerApi = require('./Routes/AppRoutes');
const {logErrors,errorHandler,BoomErrorHandler} = require("./Middlewares/ErrorHandler");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (require,response) => {
    console.log('Servidor encendido');
    response.send('Node.js + Express');
});


app.listen(port, () => {
    console.log('Escuchando en puerto '+port);
});

routerApi(app);

app.use(logErrors);
app.use(BoomErrorHandler);
app.use(errorHandler);

