import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
    it('It Changes item variable when data is entered into text field', async () => {
      const wrapper = shallowMount(Todo)
      expect(wrapper.vm.item).toBe('');

      const text=wrapper.find("#title");
      await text.setValue('Todo 1');
      expect(wrapper.vm.item).toBe('Todo 1');
    })

    it('it Adds to the todos when add button is clicked', async ()=>{
      
      const wrapper = shallowMount(Todo);
      expect(wrapper.vm.todos.length).toBe(0);
      const text=wrapper.find("#title");
      await text.setValue('Todo 1');
      const button=wrapper.find("#add");
      await button.trigger('click');
      expect(wrapper.vm.todos.length).toBe(1);
      expect(wrapper.vm.todos[0].name).toBe('Todo 1');

    })
  })
  