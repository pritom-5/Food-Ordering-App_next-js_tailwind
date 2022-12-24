import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(422).json({ status: 422, message: "Something went wrong!" });
    return;
  }

  let result;

  try {
    const dataObj = req.body;

    const URL_string = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLASTER}.cfh3m9j.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

    // connect to db
    const client = await MongoClient.connect(URL_string);
    const db = client.db();
    const col = db.collection("cartInfoCol");
    result = await col.insertOne(dataObj);
    client.close();

    if (!result.acknowledged) {
      throw new Error("Bad request");
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
  // get data

  res
    .status(201)
    .json({ status: 201, message: "Order successful", data: result });
}
