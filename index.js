const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

/*
    mongodb://localhost:27017/AppDB
*/
mongoose.connect('mongodb+srv://HoanBlog:251201@cluster0.pfgawms.mongodb.net/AppDB?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDb connected");
});

//middleware
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);

data = {
    msg: "Welcome on DevStack Blog App development YouTube video series",
    info: "This is a root endpoint",
    Working: "Documentations of other endpoints will be release soon :)",
    request:
      "Hey if you did'nt subscribed my YouTube channle please subscribe it",
  };
  
app.route("/").get((req, res) => res.json(data));
 
app.listen(port, () =>
  console.log(`welcome your listinnig at port ${port}`)
);
