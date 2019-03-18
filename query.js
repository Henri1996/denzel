const { GraphQLObjectType,GraphQLString,
    GraphQLList
} = require('graphql');


//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,

            resolve: function () {
                return "Hello World";
            }
        },
        movies : {
            type : GraphQLList,
            resolve: function(){
                return 
            }
        }
    }
});

exports.queryType = queryType;