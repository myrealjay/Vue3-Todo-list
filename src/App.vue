<template>
  <nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Todo App</a>
  </nav>
  <div style="padding-top:80px;">
     <router-view></router-view>
  </div>
 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Todo from './components/Todo.vue';

@Options({
  components: {
    Todo,
  },
  
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
  min-height: 50px;
  background-color: #837d7d;
  margin-bottom: 30px;
}
</style>
