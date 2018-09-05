<template>
  <li :class="{'removed' : item.checked}">
    <div class="checkbox">
     <label>
        <input type="checkbox" v-model="item.checked"> {{ item.text }}
        <remove-item-component 
          :item="item" 
          :items="items">
        </remove-item-component>
      </label>
    </div>
  </li>
</template>

<script>
import RemoveItemComponent from './RemoveItemComponent'

export default {
  components : {
    RemoveItemComponent
  },
  props: ['item', 'items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .removed {
   color: gray;
 }
 .removed span {
   text-decoration: line-through;
 }
 li {
   list-style-type: none;
 }
 li span {
   margin-left: 5px;
 }
</style>
