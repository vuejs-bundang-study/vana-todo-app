import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import { CHANGE_MSG, INCREMENT_COUNTER, ADD_TODO, REMOVE_TODO } from './mutation_types'

Vue.use(Vuex)

const state = {
  message : 'Hello Vue!',
  counter : 0,
  todos : [
    {title : '바나나', checked : false, color : 'blue'},
    {title : '건강검진', checked : false, color : 'blue'},
    {title : '저녁약속', checked : false, color : 'blue'},
  ]
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
      title : todo,
      checked : false, 
      color : 'blue'
    }
    state.todos.push(todoData);
  },
  [REMOVE_TODO](state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})