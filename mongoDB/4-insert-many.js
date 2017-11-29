const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const objs = [
      {
        name: 'ljy',
        age: 18
      },
      {
        name: 'lcx',
        age: 25
      }
    ]
    const result = await db.collection('customers').insertMany(objs)
    console.log(result.ops)
    db.close()
  } catch (err) {
    throw err
  }
}

run()