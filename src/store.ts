import { createStore } from "vuex"

let saved_todos:string|null=localStorage.getItem('todos');
let todos=saved_todos?JSON.parse(saved_todos):[]

export type State={
    todos:{ name: string, desc: string,done:number }[]
}

const state:State={
    todos:todos
}

export const store=createStore({
    state,
    mutations:{
        save(state,todos) {
            state.todos=todos;
            localStorage.setItem('todos',JSON.stringify(todos));
        },
        add(state,todo){
            state.todos.push(todo);
        }
    },
    actions:{
        saveTodos({commit},todos){
            commit('save',todos)
        },
        addTodo({commit,state},todo){
            commit('add',todo);
            commit('save',state.todos)
        },
        deleteTodo({commit,state},i){
            state.todos.splice(i,1);
            commit('save',state.todos)
        },
        markDone({commit,state},i){
            state.todos[i].done=1;
            commit('save',state.todos)
        }
    }
})
