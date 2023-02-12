import {MongoClient} from "mongodb";

export async function connectToDatabase() {
  return await MongoClient.connect(process.env.MONGODB_CONNECT)
}