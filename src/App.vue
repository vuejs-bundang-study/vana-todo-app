<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ShoppingList/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ShoppingList from './components/ShoppingList'


export default {
  name: 'App',
  components: {
    HelloWorld,
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
