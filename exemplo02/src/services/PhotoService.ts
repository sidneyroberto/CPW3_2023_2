import { createApi, SearchOrderBy } from 'unsplash-js'

const api = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
})
const PER_PAGE = 16

export const searchPhotos = async (
  query: string,
  criteria: string,
  page: number
) => {
  const result = await api.search.getPhotos({
    query,
    page,
    perPage: PER_PAGE,
    orderBy: criteria as SearchOrderBy,
  })

  //if(result.type === 'success')
  if (result.status === 200) {
    const { response } = result
    response?.results.forEach((r: any) => console.log(r))
  }
}
