const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

const run = async function () {
  try {
    const db = await MongoClient.connect(url)
    const delOk = await db.collection('customers').drop()
    delOk && console.log('customers collection has been deleted!')
    db.close()
  } catch (err) {
    throw err
  }
}

run()
