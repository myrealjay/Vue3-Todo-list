<template>
  <Todo />
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
</style>
