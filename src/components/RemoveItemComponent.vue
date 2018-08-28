<template>
   <v-btn flat color="orange" @click="removeItem" >delete</v-btn>
</template>

<script>
export default {
  
  methods: {
    removeItem () {
      this.items.splice(this.items.indexOf(this.item), 1)
    }
  },
  props:['item', 'items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
