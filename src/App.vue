<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout>
          <v-flex lg12 lg6 offset-lg3>
            <v-card>
              <v-card-media
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                height="200px"
              ></v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ title }}</h3>
                  <add-item-component 
                  :items="items">
                  </add-item-component>
                  <items-component 
                  :items="items">
                  </items-component>
                </div>
              </v-card-title>
              <v-card-actions>
                <change-title-component
                  @input="input" 
                  :title="title">
                </change-title-component>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AddItemComponent from './components/AddItemComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent'
import ItemsComponent from './components/ItemsComponent'

export default {
  name: 'App',
  components: {
    AddItemComponent,
    ChangeTitleComponent,
    ItemsComponent
  },
  data () {
    return {
      title : '',
      items : [
        {text : '양배추 사기', checked: true},
        {text : '쵸니랑 놀아주기', checked: false},
      ]
    }
  },
  methods:{
    input : function(val) {
      this.title = val;
    }
  }
}
</script>

<style>
</style>
