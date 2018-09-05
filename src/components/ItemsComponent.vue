<template>
  <div>
    <item-component 
      v-for="item in items" 
      :key="item.id" 
      :item="item" 
      :items="items">
    </item-component>
  </div>
</template>

<script>

import ItemComponent from './ItemComponent'

export default {
  components : {
    ItemComponent
  },
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
