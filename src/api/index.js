import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const TodoListsResource = Vue.resource('http://localhost:3000/' + 'todoLists{/id}')

export default {
  fetchTodoLists: () => {
    return TodoListsResource.get()
  },
  addNewTodoList: (data) => {
    return TodoListsResource.save(data)
  },
  updateTodoList: (data) => {
    return TodoListsResource.update({
      id: data.id
    }, data)
  },
  deleteTodoList: (id) => {
    return TodoListsResource.remove({
      id: id
    })
  }
}
