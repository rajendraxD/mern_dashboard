import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    const { host, port, name } = conn.connection;
    console.log(
      `🟢 MongoDB connected... [Database:${name}, Host: ${host}${
        port ? `:${port}` : ""
      }]`
    );
  } catch (error) {
    console.error("🔴 MongoDB connection failed:", error);
    process.exit(1);
  }
};
export default connectDb;
