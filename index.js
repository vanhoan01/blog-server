const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

/*
    mongodb://localhost:27017/AppDB
*/
// mongoose.connect('mongodb+srv://HoanBlog:251201@cluster0.pfgawms.mongodb.net/AppDB?retryWrites=true&w=majority', { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDb connected");
});

//middleware
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
app.route("/").get((req, res) => res.json("your first rest api"));
////them
app.post('/', function (req, res) {
    console.log(req.body.name)
    res.end();
 })
 
 app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on port", port);
 });
