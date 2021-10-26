import { GraphQLServer, PubSub } from 'graphql-yoga'
import { schema } from './graphql/index'

const pubsub = new PubSub()

const context = { pubsub }

const options = {
  port: 5000,
}

const server = new GraphQLServer({ schema, context })
server.start(options, () => console.log('Server is running on localhost:5000'))
