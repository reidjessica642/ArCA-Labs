import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, {
  appName: 'CvesAPI',
  minPoolSize: 2,
  maxPoolSize: 10
});

await client.connect();
const db = client.db('arca');
const COLLECTION = 'widgets';
const result = await db.collection('cves').findOneAndDelete({
  id: 'abc123'
});
console.log(result);