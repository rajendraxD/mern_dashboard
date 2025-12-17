import mongoose from "mongoose";
import dns from "node:dns/promises";

let retryCount = 0;
const connectDb = async () => {
  try {
    // Check internet first
    await dns.lookup("google.com");

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    const { host, port, name } = conn.connection;
    console.log(
      `🟢 MongoDB connected... [Database:${name}, Host: ${host}${
        port ? `:${port}` : ""
      }]`
    );
  } catch (error) {
    retryCount++;
    // Check if it's a DNS/Internet error
    if (error.code === "ENOTFOUND" || error.code === "EAI_AGAIN") {
      console.error(
        `🔴 No internet access. (${retryCount}) Retrying in 5 seconds...`
      );
      if (retryCount >= 20) {
        console.error("💀 Max retries reached. Shutting down.");
        process.exit(1);
      }
    } else {
      console.error("🔴 MongoDB connection failed:", error);
      process.exit(1);
    }
    setTimeout(connectDb, 5000);
  }
};
export default connectDb;
