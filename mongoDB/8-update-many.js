const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const result = await db.collection('customers').updateMany(
      {age: {$lt: 20}},
      { $set: {name: '新的姓名', status: 'updated'},
        $currentDate: { lastModified: true } }
    )
    console.log(result)
    db.close()
  } catch (err) {
    throw err
  }
}

run()