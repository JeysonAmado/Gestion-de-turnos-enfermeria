const nurseRouter = require('./NurseRouter');

function routerApi(app){
    app.use('/enfermeras', nurseRouter);
}

module.exports = routerApi;


