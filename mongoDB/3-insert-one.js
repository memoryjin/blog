const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const myObj = { name: 'yezi', age: 5 }
    const result = await db.collection('customers').insertOne(myObj)
    console.log(result.ops)
    db.close()
  } catch (err) {
    throw err
  }
}

run()