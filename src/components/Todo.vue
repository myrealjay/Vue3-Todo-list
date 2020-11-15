<template>
    <div>
        <div class="main">
            <h1>Todo App</h1>
            <div class="horizontal">
                <input id="title" type="text" v-model="item" class="form-control">
                <button id="add" class="btn btn-info" @click="addNew()">Add New</button>
            </div>
            <div class="display">
                <label>Total: {{total}}</label>
                <label >Pending: {{totalPending}}</label>
                <label >Done: {{totalDone}}</label>
            </div>
            <div class="todo" v-for="(todo,i) in todos" :key="i">
                <div :class="todo.done==1?'done-todo':'todo-item'">{{todo.name}}</div>
                 <button class="done" @click="markDone(i)">Done</button>
                 <button class="del" @click="Delete(i)">Del</button>
            </div>
           
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive,ref,computed} from 'vue';

const Component=defineComponent({
   
    name:'Todo',
    setup(){
        //get already saved todo if exists
        let saved_todos:string|null=localStorage.getItem('todos');
        let item=ref('');

        //set todos to saved todo if exist or initialize it as empty array
        const todos:any[]=reactive(saved_todos?JSON.parse(saved_todos):[]);

        //add a new todo and save it to local storage
        function addNew(){
            let todo={
                name:'',
                done:0,
            };
            todo.name=item.value;
            todos.push(todo);
            localStorage.setItem('todos',JSON.stringify(todos));
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
            totalDone
        }
    }
})
export default Component;
</script>

<style scoped>
    .done-todo{
        background-color: rgb(167, 241, 167);
         width:90%;
         padding:10px;
       
        margin-top:10px;
        border-radius: 10px;
        box-shadow: 0 1px 2px #d4cece;
    }
    .todo{
        display:flex;
        justify-content: space-between;
    }
    .todo button{
        height:20px;
        margin-top:10px;
    }
    .done,.del{
        width:50px;
        border-radius: 5px;
        border:none;
        color:#fff;

    }
    .done{
        background-color:#008000;
    }
    .del{
        background-color:#ff0000;
    }
    .todo .todo-item{
        width:90%;
    }
    .main{
        background-color: #f3ebeb;
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
    .horizontal{
        display:flex;
        justify-content: flex-start;
        margin-bottom: 50px;
    }
    .horizontal input[type='text']{
        width:90%;
    }
     .horizontal button{
        width:10%;
    }
    .btn-info{
        background-color:#6464df;
        color:#fff;
        border-color:#6464da;
        border-radius: 5px;
        padding:5px;
    }
    .btn-info:hover{
        background-color:#8686f1;
        color:#fff;
        border-color:#7878f3;
        border-radius: 5px;
        padding:5px;
    }
    input{
        min-height: 30px;
    }

    input[type='text']{
        border-radius: 8px;
        border-color:rgb(245, 242, 242);
    }

    .todo-item{
        padding:10px;
        background-color:#fcf4f4;
        margin-top:10px;
        border-radius: 10px;
        box-shadow: 0 1px 2px #d4cece;
    }

    @media screen and (max-width: 768px){
        .horizontal{
            display:block;
        }
        .horizontal input[type='text']{
            width:100%;
            margin-bottom: 15px;
        }
         .horizontal button{
            width:120px;
        }
    }
</style>