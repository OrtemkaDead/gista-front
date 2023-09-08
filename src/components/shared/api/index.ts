import auth, { AuthApiService } from './auth'
import gist, { GistApiServce } from './gist'
import token, { TokenApiService } from './token'

interface ApiService {
  auth: AuthApiService
  gist: GistApiServce
  token: TokenApiService
}

const api: ApiService = {
  auth,
  gist,
  token,
}

export default api
