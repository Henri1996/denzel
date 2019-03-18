const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const DENZEL_IMDB_ID = 'nm0000243';
const sandbox = require("./sandbox")
const imdb = require('./src/imdb');
const IDENTIFIANT = "Henri";
const PASSWORD = "voiture";
var cors = require('cors')
const {queryType} = require('./query.js')

const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const CONNECTION_URL = "mongodb+srv://"+IDENTIFIANT+":"+PASSWORD+"@cluster0-bmi2e.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Movies";
var myMovies;

var app ;

const schema = new GraphQLSchema({ query: queryType });



async function sb () {
//myMovies = await imdb(DENZEL_IMDB_ID);

//var awesome =myMovies.filter(movie => movie.metascore >= 70);

app = Express();
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;


app.listen(9292, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
            
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Movie");
        
        
        console.log("Connected to `" + DATABASE_NAME + "`!");
        
        
        
        /*collection.insert(myMovies, null, function (error, results) {
            if (error) throw error;
        });*/
    });

});

app.get("/movie", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.get("/movie/search", (request, response) => {
    var req=request.query;
    var metascore;
    if(req.metascore == null)
    {
        metascore=0;
    }else{metascore=Number(req.metascore);}
    
    var limit;
    if(req.limit == null)
    {
        limit = 5
    }
    else{limit=Number(req.limit)}
   
    
    collection.find({ "metascore" : {"$gt":metascore}}).sort({"metascore":-1}).limit(limit).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/movie/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);  
    });
});

app.post("/movies/:id", (request, response) => {
    req=request.body;
    collection.updateOne({id:request.params.id},{$set:{date:req.date,review:req.review}},(error, result) => {           
        if(error) {
            return response.status(500).send(error);
        }           
        response.send(result)          
    });
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

}
sb();