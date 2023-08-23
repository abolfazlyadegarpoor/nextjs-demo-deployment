//domainname.com/
import { MongoClient } from "mongodb";

import MeetupList from "./../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const request = context.req;
//   const response = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  //fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://Admin:4577241@cluster0.mptoqno.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //anny name difrent dbname
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  //readfile
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          description: meetup.description,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
};

export default HomePage;
