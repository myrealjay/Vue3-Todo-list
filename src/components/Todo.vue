<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Todo App</h1>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-12">
                         <div class="horizontal">
                            
                            <button id="add" class="btn btn-info" data-toggle="modal" data-target="#todoModal"><i class="material-icons">add</i>Add New</button>
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
                        <button style="display:none;" data-toggle="modal" data-target="#viewModal" id="view"></button>
                        <button  class="del" @click="view(i)"><i class="material-icons">visibility</i></button>
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
                        <textarea v-model="description" class="form-control"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="close" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="addNew()">Submit</button>
                </div>
                </div>
            </div>
            </div>


            <div class="modal fade" id="viewModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">View Todo</h5>
                </div>
                <div class="modal-body" v-if="todo">
                    <div class="form-group">
                        <label for="">title</label>
                        <div>
                            {{todo.name}}
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="">Description</label>
                        <div>
                            {{todo.desc}}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="close" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

        </div>
        
    
</template>

<script lang="ts">

import {defineComponent, reactive,ref,computed} from 'vue';

const Component=defineComponent({
   
    name:'Todo',
    setup(){
       
       const $=require('jquery');
        //get already saved todo if exists
        let saved_todos:string|null=localStorage.getItem('todos');
        let item=ref('');
        let description=ref('');

        //set todos to saved todo if exist or initialize it as empty array
        const todos:any[]=reactive(saved_todos?JSON.parse(saved_todos):[]);

        let todo=ref('');

        function view(i:number){
            todo.value=todos[i];
            document.getElementById('view').click();
        }
        
        function addTodo(){
            $('#todoModal').modal('show');
        }
        function close(){
            item.value='';
            description.value='';
            document.getElementById('close').click();

        }
        //add a new todo and save it to local storage
        function addNew(){
            
            let todo={
                name:item.value,
                desc:description.value,
                done:0,
            };
            todos.push(todo);
            localStorage.setItem('todos',JSON.stringify(todos));
            close();
        }

        //mark todo as done
        function markDone(i:number){
            todos[i].done=1;
             localStorage.setItem('todos',JSON.stringify(todos));
        }

        //delete a todo item
        function Delete(i:number){
            todos.splice(i,1);
            localStorage.setItem('todos',JSON.stringify(todos));
        }

        const total=computed(()=>todos.length);
        const totalPending=computed(()=>{
            return todos.filter(item=>item.done===0).length;
        })
         const totalDone=computed(()=>{
            return todos.filter(item=>item.done===1).length;
        })
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
            todo
            
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