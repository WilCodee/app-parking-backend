import { ContextType } from '../../interface'

export const Query = {
  item: async (
    _: void,
    { parkId }: { parkId: string },
    context: ContextType,
  ) => {
    const { Models } = context
    const { Item } = Models
    const item = await Item.find({ parkId })

    return item[0]
  },
}
