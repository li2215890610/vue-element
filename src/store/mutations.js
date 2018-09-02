import * as types from './types'

export default {
   //设置全局curUserId
  [types.USER_ID] (state, curUserId) {
    state.curUserId = curUserId
  },
}
