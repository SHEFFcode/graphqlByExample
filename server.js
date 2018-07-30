const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const express = require('express')
const app = express()
const PORT = 9000
const bodyParser = require('body-parser')
const cors = require('cors')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    greeting: String
  }
`

const resolvers = {
  Query: {
    greeting: () => 'Hello world'
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use(cors(), bodyParser.json())
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))

app.listen(PORT, console.log(`Listening on port ${PORT}`))
