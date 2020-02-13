// eslint-disable-next-line import/prefer-default-export
export const count = {
  state: 0,
  reducers: {
    increment(state, payload) {
      return state + payload
    }
  },
  effects: dispatch => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
      // eslint-disable-next-line no-console
      console.log(rootState)
    }
  })
}
