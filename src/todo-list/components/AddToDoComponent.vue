<template>
  <v-text-field prepend-icon="loyalty" 
    @keyup.enter="addTodo($event)"
    label="todo" type="text">
  </v-text-field>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods : mapActions(['addTodo'])
};
</script>



