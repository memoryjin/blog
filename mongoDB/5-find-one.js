const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const result = await db.collection('customers').findOne({
      age: {$lt: 20}
    })
    console.log(result._id)
    // { _id: 5a1eaba1b7fabf55b5b7e9e7, name: 'yezi', age: 5 }
    db.close()
  } catch (err) {
    throw err
  }
}

run()