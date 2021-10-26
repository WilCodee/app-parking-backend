import { ContextType } from './../../interface/index'

export const Subscription = {
  booking: {
    subscribe: (_: void, __: void, { pubsub }: ContextType) => {
      return pubsub.asyncIterator('booking')
    },
  },
}
