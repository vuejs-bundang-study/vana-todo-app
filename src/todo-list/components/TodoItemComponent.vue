<template>
  <v-list-tile>
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
</template>
<script>
import { mapActions } from 'vuex';
import RemoveTodoComponent from './RemoveTodoComponent.vue';
export default {
  components: {
    RemoveTodoComponent
  },
  methods: mapActions(['updateList']),
  props: ['todo', 'id'],
  watch: {
    'todo.checked': function() {
      this.updateList(this.id);
    }
  }
};
</script>
<style>
.removed {
  color: gray;
}

.removed div {
  text-decoration: line-through;
}
</style>