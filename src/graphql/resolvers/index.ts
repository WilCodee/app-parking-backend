import { Mutation } from './mutation'
import { Query } from './query'
import { Subscription } from './subscription'

const resolvers = {
  Query: Query,
  Mutation: Mutation,
  Subscription: Subscription,
}

export default resolvers
