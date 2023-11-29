export type Work = {
  title: string
  authors: string[]
}

export const getWork = (obj: any) => {
  const { title, authors } = obj
  const work: Work = { title, authors }
  return work
}