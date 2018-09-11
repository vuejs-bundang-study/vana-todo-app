<template>
<to-do-list-component/>
</template>

<script>
import ToDoListComponent from "./todo-list/ToDoListComponent.vue"
import store from './vuex/store'

export default {
  name: "App",
  components: {
    ToDoListComponent
  },
  store
};
</script>

<style>
</style>
