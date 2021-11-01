import { getDifferenceInMinutes } from '../../utils'
import {
  BookingArgsType,
  ContextType,
  unBookArgsType,
} from './../../interface/index'

const price = 0.3

export const Mutation = {
  booking: async (_: void, args: BookingArgsType, context: ContextType) => {
    const { pubsub, Models } = context
    const { User, Item } = Models
    const { name, carId, parkId, pin } = args
    const startedAt = new Date()

    try {
      await Item.updateOne({ parkId }, { booking: true })
      const newUser = new User({ name, carId, startedAt, parkId, pin })

      pubsub.publish(`booking-${parkId}`, {
        booking: {
          mutation: 'booked',
          data: await newUser.save(),
        },
      })

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },
  unBook: async (_: void, args: unBookArgsType, context: ContextType) => {
    const { pubsub, Models } = context
    const { User, Item } = Models
    const { carId, pin, parkId } = args

    try {
      await Item.updateOne({ parkId }, { booking: false })
      const userExists = await User.findOne({ carId })

      if (!userExists) throw new Error('User not Exist')
      const correctPin = userExists.pin === pin
      if (!correctPin) throw new Error('Pin Incorrect')
      const minutes = getDifferenceInMinutes(userExists.startedAt, new Date())
      const toPay = minutes * price

      const data = Object.assign(userExists, { minutes, toPay })

      pubsub.publish(`booking-${parkId}`, {
        booking: {
          mutation: 'unbooked',
          data,
        },
      })

      await User.deleteOne({ carId })
      return data
    } catch (err) {
      console.log(err)
      return false
    }
  },
}
