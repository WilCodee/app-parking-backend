import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    carId: {
      type: String,
      required: true,
    },
    startedAt: {
      type: Date,
      required: true,
    },
    parkId: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
)

export default model('User', userSchema)
