<template>
  <div id="app" class="container">
    <h2>{{title}}</h2>
    <div class="input-group">
      <input v-model="newItem" @keyup.enter="addItem"
      placeholder="add shopping list item" type="text" class="form-control">
      <span class="input-group-btn">
      <button v-on:click="addItem" class="btn btn-default" type="button">Add!</button>
      </span>
    </div>
    <ul>
      <li v-for="item in items" v-bind:class="{'removed' : item.checked}">
        <div class="checked">
          <label>
            <input type="checkbox" v-model="item.checked">
              {{ item.text }}
          </label>
        </div>
      </li>
    </ul>
    <div class="footer">
      <hr/>
      <em>Change the title of your shopping list here</em>
      <input v-model="title"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShoppingList',
  data () {
    return {
      title : '쭈갱이꺼',
      items: [
        {text : 'Banana', checked : false},
        {text : 'Orange', checked : false},
        {text : 'Melon', checked : true},
        {text : 'Blueberry', checked : false},
        {text : 'Mango', checked : true},
      ],
      newItem: ''
    }
  },
  methods: {
    addItem: function() {
        var text;
        text = this.newItem.trim();
        if(text) {
          this.items.push({
            text: text,
            checked : false
          });
          this.newItem = '';
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
