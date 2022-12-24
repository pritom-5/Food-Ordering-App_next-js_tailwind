import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(422).json({ message: "Something went wrong!" });
    return;
  }

  // get data
  const dataObj = req.body;

  const URL_string = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLASTER}.cfh3m9j.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

  // transform data to json
  // const dataJson = JSON.stringify(dataObj);

  // connect to db
  const client = await MongoClient.connect(URL_string);
  const db = client.db();
  const col = db.collection("cartInfoCol");
  const result = await col.insertOne(dataObj);

  client.close();
  res
    .status(201)
    .json({ status: 201, message: "Order successful", data: result });
}
