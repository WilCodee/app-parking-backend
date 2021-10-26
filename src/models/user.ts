import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  carId: {
    type: String,
    required: true,
  },
  startedAt: {
    type: String,
    required: true,
  },
})

export default model('User', userSchema)
