import Head from "next/head";
import Items from "../components/items/Items";
import { MongoClient } from "mongodb";

export default function Home({ data }) {
  return (
    <>
      <div>
        <Items items={data} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sakibShadman:sakibShadman@atlascluster.cfh3m9j.mongodb.net/foodDb?retryWrites=true&w=majority"
  );
  const db = client.db();

  const col = db.collection("foodCollection");

  const data = await col.find().toArray();

  // trfansorm new Object(_id) to string id:

  const updatedData = data.map((i) => ({
    id: JSON.stringify(i._id),
    title: i.title,
    subtitle: i.subtitle,
    description: i.description,
    price: i.price,
    amount: i.amount,
    image: i.image,
  }));

  ///////
  // console.log("test_id", data[0]._id.toString());

  return {
    props: { data: updatedData },
  };
}
