const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const result = await db.collection('customers').deleteOne(
      { age:5 },
    )
    console.log(result)
    db.close()
  } catch (err) {
    throw err
  }
}

run()