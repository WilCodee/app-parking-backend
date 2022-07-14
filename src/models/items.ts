import { Schema, model } from 'mongoose'

const itemSchema = new Schema(
  {
    parkId: {
      type: String,
      required: true,
    },
    booking: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false },
)

export default model('Item', itemSchema)
