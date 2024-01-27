import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'user';


async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');
    const findResult = await collection.find({}).toArray();
    return findResult
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());