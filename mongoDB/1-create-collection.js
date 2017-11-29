const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const res = await db.createCollection('customers')
    console.log(res)
    db.close()
  } catch (err) {
    throw err
  }
}

run()
