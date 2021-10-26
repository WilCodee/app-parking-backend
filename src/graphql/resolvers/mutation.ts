import {
  BookingArgsType,
  ContextType,
  unBookArgsType,
} from './../../interface/index'

export const Mutation = {
  booking: (
    _: void,
    { name, carId }: BookingArgsType,
    { pubsub }: ContextType,
  ) => {
    try {
      pubsub.publish('booking', {
        booking: {
          mutation: 'booked',
          data: { name, carId },
        },
      })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },
  unBook: (_: void, { carId }: unBookArgsType, { pubsub }: ContextType) => {
    const name = 'pepe'
    try {
      pubsub.publish('booking', {
        booking: {
          mutation: 'unbooked',
          data: { name, carId },
        },
      })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },
}
