import { MongoClient } from 'mongodb'
const { MONGO_URL } = process.env;
const { dbName } = process.env;

async function connectToMongoDB() {
    const client = new MongoClient(MONGO_URL);
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export async function create(collection, data) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection(collection);
        return await coll.insertOne(data);
    } catch (e) {
        console.log("error in create", e.message)
        throw new Error(e.message)
    }
}

export async function read(collection, email = false) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection(collection);
        return email ? await coll.findOne({ email }) : await coll.find({}).toArray();
    } catch (e) {
        console.log("error in read", e.message)
        throw new Error(e.message)
    }
}

export async function update(collection, user, update) {
    try {
        const db = await connectToMongoDB(user);
        const coll = db.collection(collection);
        return await coll.updateOne(user, { $set: update });
    } catch (e) {
        console.log("error in update", e.message)
        throw new Error(e.message)
    }
}

export async function del(collection, email) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection(collection);
        return await coll.deleteOne({ email });
    } catch (e) {
        throw new Error(e.message)
    }
}