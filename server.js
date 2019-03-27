//this is a db.mongo server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
///
const User = require('./models/User')
const UserJSON = require('./UserJSON')
const Kudos = require('./models/Kudos')
const KudosJSON = require('./KudosJSON')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

///
const uri = "mongodb+srv://root:rootyroot@kudos-db-bdr0d.mongodb.net/kudos-db?retryWrites=true"

//remote mongo
mongoose.connect(uri, {useNewUrlParser: true });
//local mongo
// mongoose.connect('mongodb://localhost/kudos_db', {useNewUrlParser: true })


// seed mongo
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function callback() { 

// mongoose.connect('mongodb://localhost/kudos_db', {useNewUrlParser: true })

//     // Reset and Seed DB
//     .then(()=>{
//     mongoose.connection.db.dropDatabase();

//     for (i=0;i<UserJSON.length;i++) {
//         User.create(UserJSON[i])
//     };
    
//     for (i=0;i<KudosJSON.length;i++) {
//         Kudos.create(KudosJSON[i])
//     };
//     //
// }); 
// })

require('./routes/api-routes')(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req,res){
      res.sendFile(__dirname + "/client/build/index.html")
  })
}

app.listen(PORT, ()=>{
    console.log(`"Kudos" for finding ${PORT}`)
});
