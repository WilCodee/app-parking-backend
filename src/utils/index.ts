export const getDifferenceInMinutes = (date1: any, date2: any) => {
  const diffInMs = Math.abs(date2 - date1)
  return Math.round(diffInMs / (1000 * 60))
}
