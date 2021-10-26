import { PubSub } from 'graphql-yoga'

export interface ContextType {
  pubsub: PubSub
}

export interface BookingArgsType {
  name: string
  carId: string
}

export interface unBookArgsType {
  carId: string
}
