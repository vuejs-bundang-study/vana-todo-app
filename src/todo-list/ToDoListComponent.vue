<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{currentItem}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tabs
                  slot="extension"
                  v-model="currentItem"
                  color="transparent"
                  fixed-tabs
                  slider-color="yellow"
                >
                  <v-tab
                    v-for="item in tabList"
                    :href="'#' + item.name"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </v-tab>
                </v-tabs>
              </v-toolbar>
              <v-card-text>
                <add-to-do-component></add-to-do-component>
              </v-card-text>
              <todo-item-list-component></todo-item-list-component>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import AddToDoComponent from './components/AddToDoComponent.vue';
import TodoItemListComponent from './components/TodoItemListComponent.vue';

export default {
  data() {
    return {
      currentItem: '',
      tabList: [
        { id: 'todo', name: '할 일 목록' },
        { id: 'done', name: '완료된 목록' },
        { id: 'yet', name: '예정된 목록' }
      ]
    };
  },
  components: {
    AddToDoComponent,
    TodoItemListComponent
  },
  methods: {
    onChangeTitle(id, text) {
      _.findWhere(this.todolists, {
        id: id
      }).title = text;
    },
    // 완료 체크
    checkComplete: () => {
      this.todo.checked = true;
    },
    // 기간 별 할일 목록 월별로 정리/주별로 정리/일별로 정리 filter
    changePeriod: () => {},

    // 우선 순위 표시하기 색깔로 (빨간색 : 1, 주황색 : 2, 노란색 : 3, 초록색 : 4, 파란색 : 5)
    setColor: () => {},
    // 우선 순위 별 정렬 (색깔로 정렬)
    sortColor: () => {}
  }
};
</script>

