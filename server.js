

const { GraphQLServer }     = require('graphql-yoga');
const path                  = require('path');
const resolvers             = require('./resolvers/resolvers');
const mongoose              = require('mongoose');
/**
 * @apiGroup server
 * @api mongoose.connect('mongodb://localhost:27017/rating'
 * @apiDescription Faz a conexão com o mongoDb
 */
mongoose.connect('mongodb://localhost:27017/rating',{
    useNewUrlParser:true
});

/**
 * @apiGroup server 
 * @api server_=_new_GraphQLServer
 * @apiDescription Faz as configurações necessárias do graphQl
 */
const server                = new GraphQLServer({
    typeDefs: path.resolve(__dirname,'./schema/schema.graphql'),
    resolvers
});


server.start();