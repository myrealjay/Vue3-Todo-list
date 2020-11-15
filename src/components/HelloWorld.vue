<template>
  <div class="hello">
    <h4>{{`${state.user.first_name} ${state.user.last_name}`}}</h4>
    <h1>{{message}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {computed} from 'vue';

const Component=defineComponent({
    setup(){
      const state:Object={
        user:{
          first_name:'James',
          last_name:'Nwachukwu'
        },
      }
      let message=computed(()=>'This is my mesage');

      return{
        message,
        state
      }
    }
})
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
