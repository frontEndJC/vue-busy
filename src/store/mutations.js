import { SIGN_OUT, LOG_IN } from './mutation-types'

export default {
  [SIGN_OUT] (state) {
    state.token = null
    state.userInfo = null
  },
  [LOG_IN] (state, params) {
    state.userInfo = params.userInfo
    state.token = params.token
  }
}
