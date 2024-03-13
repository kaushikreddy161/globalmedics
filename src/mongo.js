const mongoose = require('mongoose');
const env = require('./environment');
mongoose.Promise = global.promise;


const mongoUrl = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@ac-mongodbcosmos@`;

function connect() {
    return mongoose.connect(mongoUri, { useMongoClient: true});
}

module.exports = {
    connect,
    mongoose
}