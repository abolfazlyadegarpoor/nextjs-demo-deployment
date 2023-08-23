import { MongoClient } from "mongodb";

const handler = async (request, response) => {
  if (request.method === "POST") {
    const data = request.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Admin:4577241@cluster0.mptoqno.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    //anny name difrent dbname

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    response.status(201).json({ message: "meetup inserted successfully" });
  }
};

export default handler;
