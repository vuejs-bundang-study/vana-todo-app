<template>
  <v-btn icon ripple @click="removeTodo(todo)">
    <v-icon color="grey lighten-1">remove_circle_outline</v-icon>
  </v-btn>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods : mapActions(['removeTodo']),
  props : ['todo']
}
</script>

