import { PubSub } from 'graphql-yoga'

export interface ContextType {
  pubsub: PubSub
  Models: ModelsType
}

export interface BookingArgsType {
  pin: string
  parkId: string
  name: string
  carId: string
  startedAt: string
}

export interface unBookArgsType {
  pin: string
  parkId: string
  carId: string
}

interface ModelsType {
  User: any
  Item: any
}
