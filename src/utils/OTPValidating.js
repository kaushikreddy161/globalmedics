const MongoClient = require('mongodb').MongoClient;

async function connectToMongoDB() {
    const url = 'mongodb://localhost:27017'; // replace with your MongoDB connection string
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected successfully to MongoDB server");
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

connectToMongoDB();