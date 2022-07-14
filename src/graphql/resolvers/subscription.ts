import { ContextType } from './../../interface/index'

export const Subscription = {
  booking: {
    subscribe: (
      _: void,
      { parkId }: { parkId: string },
      { pubsub }: ContextType,
    ) => {
      return pubsub.asyncIterator(`booking-${parkId}`)
    },
  },
}
