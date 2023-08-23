import { createApi, SearchOrderBy } from 'unsplash-js'
import { getPhoto, Photo } from '../models/Photo'

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
    //orientation: 'landscape',
    orderBy: criteria as SearchOrderBy,
  })

  //if(result.type === 'success')
  if (result.status === 200) {
    const { response } = result

    if (response) {
      const photos: Photo[] = response.results.map((r: any) => getPhoto(r))
      return photos
    }
  }

  return []
}
