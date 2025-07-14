const dotEnv = require("dotenv");
const { MongoClient, Collection } = require("mongodb");
dotEnv.config();

const url = process.env.DB_URI;
const client = new MongoClient(url);

const dbName = "studentDB";
const CollectionName = "students";

async function main() {
  try {
    await client.connect();
    console.log("Connection successful");

    const db = client.db(dbName);
    const collection = db.collection(CollectionName);

    // const insertData = await collection.insertMany([
    //   { name: "Omkar", age: 24, course: "Node.js", city: "Goa" },
    //   { name: "Shravani", age: 21, course: "React", city: "Hubli" },
    //   { name: "Ravi", age: 23, course: "Python", city: "Belgaum" },
    // ]);
    // const students = [
    //   { name: "Narayan", age: 22, course: "Node.js", city: "Goa" },
    //   { name: "Deepak", age: 23, course: "React", city: "Delhi" },
    //   { name: "Anshuk", age: 21, course: "Node.js", city: "Mumbai" },
    //   { name: "Rohini", age: 24, course: "Python", city: "Hyderabad" },
    //   { name: "Steven", age: 22, course: "Node.js", city: "Bangalore" },
    //   { name: "Rishab", age: 25, course: "Java", city: "Chennai" },
    //   { name: "Sadiya", age: 20, course: "React", city: "Kolkata" },
    //   { name: "Prajwal", age: 23, course: "Node.js", city: "Pune" },
    //   { name: "Sneha", age: 22, course: "Java", city: "Nagpur" },
    //   { name: "Aditya", age: 24, course: "Python", city: "Jaipur" },
    // ];

    // const newStudents = await collection.insertMany(students);
    // console.log("Data inserted successfully", newStudents);

    // ! UPDATE
    const update = await collection.updateOne(
      { name: "Omkar" },
      { $set: { course: "MongoDB" } }
    );
    console.log("Updated Succesfully", update);

    // ! Delete
    const deleteData = await collection.deleteOne({ name: "Ravi" });
    console.log("Deleted Succesfully", deleteData);

    // ! Counting number of people in a single course

    const count = await collection.countDocuments({ course: "React" });
    console.log("Number of people in React course", count);

    // ! Incrementing age by 1 year
    const increment = await collection.updateOne(
      { city: "Goa" },
      { $inc: { age: 1 } }
    );
    console.log("Success", increment);

    // ! Adding new field
    const add = await collection.updateOne(
      {
        name: "Omkar",
      },
      { $set: { skills: ["React.js", "Node.js"] } }
    );

    // ! Displaying the data
    const data = await collection.find({ city: "Goa" }).toArray();

    console.log("Student info ==>", data);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main();
