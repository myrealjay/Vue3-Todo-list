import {Store} from 'vuex';
import {State} from './store';
import {Route} from 'vue-router'
declare module "@vue/runtime-core" {
    // Declare your own store states.
   
    interface ComponentCustomProperties {
      $store: Store<State>;
    }
  }

  declare module "vuex"{
    export function useStore(key?:string):Store<State>
  }
