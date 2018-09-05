<template>
  <v-text-field 
  v-on:input="onInput" 
  label="제목을 바꾸고 싶다면?">
  </v-text-field>
</template>

<script>

export default {
  methods: {
    onInput: function (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
