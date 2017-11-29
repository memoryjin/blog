const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const result = await db.collection('customers').find({
      age: {$lt: 20}
    }).toArray()
    console.log(result)
    // [ { _id: 5a1eaaa112851355743f747e, name: 'ljy', age: 18 },
    // { _id: 5a1eaba1b7fabf55b5b7e9e7, name: 'yezi', age: 5 } ]
    db.close()
  } catch (err) {
    throw err
  }
}

run()