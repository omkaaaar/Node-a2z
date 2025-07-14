const { MongoClient} = require('mongodb')
const dotEnv = require('dotenv')
dotEnv.config()

const url = process.env.MONGO_URI
const client = new MongoClient(url)

//! Specify the database name
const dbName = 'users'

async function main(){
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected to database')

    const db = client.db(dbName)
    const collection = db.collection('HelloWorld')

    // ! Inserting data
    const insertResult = await collection.insertMany(
        [{"Name":"Omi", "agr":34,"city":"goaaaaaaaaa"},
            {"Name":"Omyao","agr":24,"city":"goaaaaaaaaa"},
            {"Name":"Omyaoooooo","agr":24,"city":"goaaaaaaaaa"}

        ]
    )
    console.log('Inserted documents =>', insertResult);
    
    //! Reading file
    const findResult = await collection.find({}).toArray()
    console.log('Found document =>', findResult);
    

    return 'done'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());