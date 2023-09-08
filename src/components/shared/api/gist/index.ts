import client from '@/shared/api/client'

export interface Gist {
  id: number
  name: string
  //name, section, university, preview_image
}

export interface GistApiServce {
  requestOne: (id: number) => Promise<Gist | null>
  requestAll: () => Promise<Gist>[]
}

export default {
  async requestOne(id: number) {
    return client({
      method: 'get',
      url: `/gists/${id}`,
    })
  },
} as GistApiServce
