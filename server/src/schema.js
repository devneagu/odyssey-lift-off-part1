const {gql} = require('apollo-server');

const typeDefs = gql`

type Query {
    tracksForHome : [Track!]!
}
"A track is a group of modules that teaches about a specific topic"
type Track {
    id : ID!
    "the track title"
    title : String!
    "the track's main author"
    author : Author!
    thumbnail : String
    length : Int
    modulesCount : Int
}

type Author {
    id : ID!
    name : String!
    photo : String
}

`;



module.exports = typeDefs;