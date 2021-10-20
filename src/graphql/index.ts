import { makeExecutableSchema } from '@graphql-tools/schema'
import 'graphql-import-node'
import Schema from './schemas/schema.gql'
import resolvers from './resolvers/index'

export const schema = makeExecutableSchema({ typeDefs: [Schema], resolvers })
