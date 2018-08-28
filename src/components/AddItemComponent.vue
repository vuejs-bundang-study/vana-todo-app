<template>
    <v-text-field @keyup.enter="addItem" v-model="newItem" placeholder="할 일 추가" label="To do" required></v-text-field>
</template>

<script>

export default {
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem () {
      if(this.newItem !== '') {
        this.items.push({
          text : this.newItem,
          checked : false
        })
      }
      
      this.newItem = ''
    }
  },
  props:['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
