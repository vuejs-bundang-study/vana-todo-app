import _ from 'underscore'

export default {
  getMessage(state) {
    return (state.message).toUpperCase()
  },
  getCounter(state) {
    return (state.counter)
  },
  getTodos: state => state.todos,
  getListById: (state, id) => {
    return _.findWhere(state.todos, {
      id: id
    })
  }
}
