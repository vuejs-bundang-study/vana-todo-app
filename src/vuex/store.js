import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import {
  CHANGE_MSG,
  INCREMENT_COUNTER,
  ADD_TODO,
  REMOVE_TODO,
  POPULATE_TODO_LISTS
} from './mutation_types'

Vue.use(Vuex)

const state = {
  message: 'Hello Vue!',
  counter: 0,
  todos: []
}

const mutations = {
  [CHANGE_MSG](state, msg) {
    state.message = msg
  },
  [INCREMENT_COUNTER](state) {
    state.counter++
  },
  [ADD_TODO](state, todo) {
    let todoData = {
      title: todo,
      checked: false,
      color: 'blue'
    }
    state.todos.push(todoData);
  },
  [REMOVE_TODO](state, todo) {
    state.todos = state.todos.filter(item => item !== todo)
  },
  [POPULATE_TODO_LISTS](state, lists) {
    state.todos = lists
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
