<template>
  <v-list subheader two-line>
    <v-subheader>Todo List</v-subheader>
    <v-list-tile v-for="todo in todos" :key="todo.title">
      <v-list-tile-action>
        <v-checkbox v-model="todo.checked"></v-checkbox>
      </v-list-tile-action>
      <v-list-tile-content :class="{'removed' : todo.checked}" @click="todo.checked = !todo.checked">
        <v-list-tile-title>{{todo.title}}</v-list-tile-title>
        <v-list-tile-sub-title>sub title etc ... </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <remove-todo-component :todo="todo"></remove-todo-component>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
   import {
     mapGetters
   } from 'vuex'
   import RemoveTodoComponent from './RemoveTodoComponent.vue';
  
   export default {
     components: {
       RemoveTodoComponent
     },
     computed: mapGetters({
       todos: 'getTodos'
     }),
   }
</script>

<style>
  .removed {
    color: gray;
  }
  
  .removed div {
    text-decoration: line-through;
  }
</style>