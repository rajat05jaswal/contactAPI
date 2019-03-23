let express=require("express"),
	app=express(),
	port=process.env.PORT || 3500,
	mongoose=require("mongoose"),
	bodyParser=require("body-parser");

mongoose.connect('mongodb://localhost:27017/contacts',{
	useMongoClient:true
},(e)=>{
	console.log("Connection Established");
})
mongoose.Promise=global.Promise;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
let initApp = require('./api/app');
initApp(app);
console.log(mongoose.modelNames());
app.listen(port);

console.log(`Contact app running at port ${port}`);
