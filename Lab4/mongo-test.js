import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

await client.connect();
const db = client.db('arca');
const COLLECTION = 'cves';
const result = await db.collection('cves').find({
    color: 'red'
}).toArray();
console.log(result);

/*
// create/insert ----------------------------------
const insertResult = await db.collection(COLLECTION).insertOne({
    id: '6ba9f058-39c4-4b3f-b7f8-cabefbf8db83',
    name: 'CVE',
    url: 'url',
    tags: [
      'tag'
    ],
    risk: 'risk',
    color: 'color',
  });
console.log(`Inserted ${insertResult.insertedCount} record with ID ${insertResult.insertedId}`);

// const multiInsertResult = await db.collection(COLLECTION).insertMany([ { a: true}, { b: false } ]);
// console.log(`Inserted ${multiInsertResult.insertedCount} records`);
*/