import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URL);

export async function mongoConnect() {  
  try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.DATABASE);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
}

export default db;
