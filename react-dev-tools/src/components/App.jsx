import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avtar from "./Avtar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avtar 
               img = "https://scontent.fcok10-1.fna.fbcdn.net/v/t39.30808-6/281241556_1651990491841120_7356322978545002311_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=IFikB-JbsrsAX8uDHIS&_nc_ht=scontent.fcok10-1.fna&oh=00_AfAsNniqizU0H0rixzOLNJg1AO2WoMPq_mZFfW4RMXztyA&oe=63FA1E76"

      />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
