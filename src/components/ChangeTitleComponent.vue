<template>
  <v-text-field v-bind:title="title" v-on:input="onInput" label="제목을 바꾸고 싶다면?"></v-text-field>
</template>

<script>

export default {
  methods: {
    onInput: function (event) {
      this.$emit('input', event)
    }
  },
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
