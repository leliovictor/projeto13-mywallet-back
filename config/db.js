import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);
let db = null;

try {
  await mongoClient.connect();
  db = mongoClient.db(process.env.DATABASE);
  console.log("MongoDB connected");
} catch (error) {
  console.log("Could not connect to database", error);
}

export default db;
