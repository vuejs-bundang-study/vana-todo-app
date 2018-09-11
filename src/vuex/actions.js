import {CHANGE_MSG, INCREMENT_COUNTER, CHANGE_TITLE, ADD_TODO, REMOVE_TODO} from './mutation_types'

export default {
  changeMessage ({commit}, msg) {
    commit(CHANGE_MSG, msg)
  },
  incrementCounter ({commit}) {
    commit(INCREMENT_COUNTER)
  },

  handleMessageInputChanges ({commit}, event) {
    commit(CHANGE_MSG, event.target.value)
    if(event.keyCode === 13) {
      commit(INCREMENT_COUNTER)
    }
  },
  changeTitle ({commit}, data) {
    commit(CHANGE_TITLE, data)
  },
  addTodo ({commit}, event) {
    let todo = event.target.value;
    if(!todo) {
      console.error('invalid todo');
      return;
    }  
    commit(ADD_TODO, todo);
    event.target.value = '';
  },
  removeTodo ({commit}, todo) {
    commit(REMOVE_TODO, todo)
  }
}