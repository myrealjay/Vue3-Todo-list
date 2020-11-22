<template>
    <div>
        <div class="container">
            <div class="content">
                
                <div class="row">
                    <div class="col-md-12">
                         <div class="horizontal">
                            
                            <button id="add" class="btn btn-info" @click="previous()"><i class="material-icons">keyboard_return</i>Previous Page</button>
                        </div>
                    </div>
                   
                </div>

                <div >
                    <div class="row">
                         <div class="col-md-12">
                              <div class="form-group">
                                 <label for="">Status</label>
                                 <div style="padding:10px;">
                                     <div class="btn btn-info btn-xs" v-if="todo.done===0">Pending</div>
                                     <div class="btn btn-success btn-xs" v-if="todo.done===1">Completed</div>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label for="">Title</label>
                                 <div :class="todo.done==1?'done-todo':'todo-item'" style="padding:10px;">
                                     {{todo.name}}
                                 </div>
                             </div>

                              <div class="form-group">
                                 <label for="">Description</label>
                                 <div style="padding:10px;">
                                     {{todo.desc}}
                                 </div>
                             </div>
                             
                        </div>
                    </div>
                    
                   
                </div>

                </div>
            </div>


        </div>
        
    
</template>

<script lang="ts">

import {defineComponent,computed} from 'vue';
import {useStore} from 'vuex';
import {useRoute,useRouter} from 'vue-router';

const Component=defineComponent({
   
    name:'viewTodo',
    setup(){
        const route=useRoute();
        const router =useRouter();
        const store=useStore();
        
       const todo=computed(()=>{
           return store.state.todos[parseInt(route.params.id.toString())];
       })

       function previous(){
           router.go(-1);
       }

        return{
            todo,
            previous
           
        }
    }
})
export default Component;
</script>

<style scoped>
.btns{
    display:flex;
    justify-content: flex-end;
}
    .done-todo{
        background-color: rgb(167, 241, 167);
         padding:10px;
       
        margin-top:10px;
        border-radius: 10px;
        box-shadow: 0 1px 2px #d4cece;
    }
    .done,.del,.view{
        border-radius: 5px;
        border:none;
        color:#fff;
        background:none;
        width: 25px;

    }
    .done{
        color:#008000;
    }
    .del{
        color:#ff0000;
    }
    .view{
        color:#837d7d;
    }
    .main{
       
        min-height:100vh;
        padding:50px;
    }
    h1{
        background-color:#837d7d;
        text-align: center;
        padding:8px;
        border-radius: 8px;
        color:#fff;
        font-size: 16px;
    }
    label{
        padding-left:10px;
    }
  
   
    .todo-item{
        padding:10px;
        background-color:#fcf4f4;
        margin-top:10px;
        border-radius: 10px;
        box-shadow: 0 1px 2px #d4cece;
        width:100%;
    }

</style>