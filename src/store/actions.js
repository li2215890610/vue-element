import * as types from './types'

export default {
  //设置全局UserId
  updateCurUserId({ commit }, curUserId) {
   commit(types.USER_ID, curUserId)
  },
}

