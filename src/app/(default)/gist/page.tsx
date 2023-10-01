import { revalidatePath } from 'next/cache'

import { Gist } from '@/shared/api'
import { GistContextProvider } from '@/shared/context'

import EditGistModal from './components/edit-gist-modal'
import TestGistModal from './components/test-gist-modal'

let gistIdIncrement = 1
const fakeGist = (id: number): Gist => ({
  id: id,
  name: `This gist is ${id}`,
})

// Мок, это должно приходить с бека
const gists: Gist[] = []

export default function GistPage(): React.ReactElement {
  const serverFunc = async function () {
    'use server'

    gists.push(fakeGist(gistIdIncrement))
    gistIdIncrement += 1

    revalidatePath('/')
  }

  const editFunc = async function (id: number, name: string) {
    'use server'

    const gist = gists.find((item) => item.id === id)

    if (gist) {
      gist.name = name
    }

    revalidatePath('/')
  }

  return (
    <GistContextProvider
      initialValue={gists}
      serverFunc={serverFunc}
      editFunc={editFunc}
    >
      <div>
        {gists.map((gist) => (
          <div key={gist.id}>
            {gist.name} <EditGistModal id={gist.id} />
          </div>
        ))}
        <div>
          <TestGistModal />
        </div>
      </div>
    </GistContextProvider>
  )
}
