import { GraphQLServer, PubSub } from 'graphql-yoga'
import { schema } from './graphql/index'
import Models from './models'
import './db'

const pubsub = new PubSub()

const context = { pubsub, Models }

const options = {
  port: process.env.PORT || 5000,
}

const server = new GraphQLServer({ schema, context })
server.start(options, () => console.log('Server is running on localhost:5000'))
