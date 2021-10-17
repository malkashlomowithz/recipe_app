let express = require('express')
let app = express();

let port = process.env.PORT || 8080;

// Launch app to the specified port

app.listen(port, function() {
    console.log("Running on Port "+ port);
})

//server needs to respond with CORS headers on the options call
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//Import routes
let recipeRoutes = require("./router/recipeRoutes");
let messageRouts = require("./router/messageRouter");

//Use API routes in the App
app.use('/api', recipeRoutes);
app.use('/api', messageRouts);

//import body parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//connect to mongoose
const dbPath = 'mongodb+srv://malka:malka1517@cluster0.yojac.mongodb.net/RECIPE_APP?retryWrites=true&w=majority';
const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: true,
            }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})
