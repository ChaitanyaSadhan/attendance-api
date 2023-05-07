import express from "express";
import mongoose from "mongoose";
import type { ConnectOptions } from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://kcsadhan:rgukt123@cluster0.ydfy52i.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

const mySchema = new mongoose.Schema({
  idNumber: String,
  name: String,
});

const MyModel = mongoose.model("attendances", mySchema);

app.get("/data", async (req, res) => {
  try {
    const data = await MyModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
