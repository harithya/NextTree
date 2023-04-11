import { MongoClient } from 'mongodb'

let uri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017'
let dbName = process.env.MONGODB_DB


if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

const connectToDatabase = async() => {
  const client = await MongoClient.connect(uri)
  const db = await client.db(dbName)
  return { client, db }
}

export default connectToDatabase
