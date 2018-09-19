<template>
  <v-list subheader two-line>
    <v-subheader>Todo List</v-subheader>
    <todo-item-component v-for="todo in todos" :todo="todo" :id="todo.id" :key="todo.id"></todo-item-component>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItemComponent from './TodoItemComponent';

export default {
  components: {
    TodoItemComponent
  },
  computed: mapGetters({
    todos: 'getTodos'
  }),
  methods: mapActions(['populateTodoLists', 'createTodoList']),
  mounted() {
    this.populateTodoLists();
  }
};
</script>