import Vue from 'vue';
import 'bootstrap'
import {useStore} from 'vuex';
const store=useStore();

import jQuery from 'jquery';
const $=jQuery;
(<any>window).$=$;

import { shallowMount,mount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
    it('It Changes item and description variables when data is entered into text field', async () => {
      const wrapper = shallowMount(Todo)
      expect(wrapper.vm.item).toBe('');
      expect(wrapper.vm.description).toBe('');

      // const button=wrapper.find("#add");
      // await button.trigger('click');

      // const text=wrapper.find("#title");
      // await text.setValue('Todo 1');
      // const desc=wrapper.find("#desc");
      // await desc.setValue('description');
      // expect(wrapper.vm.item).toBe('Todo 1');
      // expect(wrapper.vm.description).toBe('description');
    })

    // it('it Adds to the todos when add button is clicked', async ()=>{
    //   localStorage.removeItem('todos');
    //   const wrapper = mount(Todo);
    //   expect(wrapper.vm.todos.length).toBe(0);
  
    //   const button=wrapper.find("#add");
    //   await button.trigger('click');

    //   const text=wrapper.find("#title");
    //   await text.setValue('Todo 1');

    //   const desc=wrapper.find("#desc");
    //   await desc.setValue('this is my todo');

    //   const sub=wrapper.find("#adder");
    //   expect(sub.exists()).toBeTruthy();
    //   expect(sub.text()).toBe('Submit');

    //   await sub.trigger('click');
    
    //   expect(wrapper.vm.todos.length).toBe(1);
    //   expect(wrapper.vm.todos[0].name).toBe('Todo 1');
    //   expect(wrapper.vm.todos[0].desc).toBe('this is my todo');

    // })
  })
  