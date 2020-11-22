<template>
    <div>
        <div class="container">
            <div class="content">
                
                <div class="row">
                     <div class="col-md-12" type="margin-top:50px;padding-top:100px;">
                         <div >
                            
                            <button id="add" class="btn btn-info" @click="addTodo()"><i class="material-icons">add</i>Add New</button>
                        </div>
                    </div>

                    <div class="col-md-12" style="margin-top:50px;">
                         <div class="display">
                            <label>Total: {{total}}</label>
                            <label >Pending: {{totalPending}}</label>
                            <label >Done: {{totalDone}}</label>
                        </div>
                    </div>
                   
                </div>

                <div class="row" v-for="(todo,i) in todos" :key="i">
                     <div class="col-md-11">
                         <div class="todo" >
                            <div :class="todo.done==1?'done-todo':'todo-item'">{{todo.name}}</div>
                            
                        </div>
                    </div>
                    <div class="col-md-1 btns" style="padding-left:12px;">
                        <button class="done" @click="markDone(i)"><i class="material-icons">check_circle</i></button>
                        <button class="del" @click="Delete(i)"><i class="material-icons">delete</i></button>
                         <button class="view" @click="view(i)"><i class="material-icons">visibility</i></button>
                        
                    </div>
                </div>

                </div>
            </div>


            <!-- Modal -->
            <div class="modal fade" id="todoModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Todo</h5>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">title</label>
                        <input id="title" type="text" v-model="item" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="">Description</label>
                        <textarea id="desc" v-model="description" class="form-control"></textarea>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button id="close" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button id="adder" class="btn btn-primary" @click="addNew()">Submit</button>
                </div>
                </div>
            </div>
            </div>

        </div>
        
    
</template>

<script lang="ts">

import {defineComponent,ref,computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const Component=defineComponent({
   
    name:'Todo',
    setup(){
       const store=useStore();
       const $=require('jquery');
       const router=useRouter();
       
        let item=ref('');
        let description=ref('');

        //get stored todos from store
        const todos=computed(()=>{
            return store.state.todos;
        })

        //opens the add todo modal
        function addTodo(){
            $('#todoModal').modal('show');
        }

        //add a new todo and save it to local storage
        function addNew(){
            let todo={
                name:item.value,
                desc:description.value,
                done:0,
            };
            store.dispatch('addTodo',todo);
            close();
        }

        //closes todo modal
        function close(){
            item.value='';
            description.value='';
            $('#todoModal').modal('hide');
        }

        function view(i:number){
            router.push({name:'view-todo',params:{id:i}});
        }

        //mark todo as done
        function markDone(i:number){
            store.dispatch('markDone',i);
        }

        //delete a todo item
        function Delete(i:number){
            store.dispatch('deleteTodo',i);
        }

        //get counts
        const total=computed(()=>todos.value.length);
        const totalPending=computed(()=>todos.value.filter(item=>item.done===0).length)
        const totalDone=computed(()=>todos.value.filter(item=>item.done===1).length)

        return{
            todos,
            addNew,
            item,
            markDone,
            Delete,
            total,
            totalPending,
            totalDone,
            addTodo,
            close,
            view,
            description
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