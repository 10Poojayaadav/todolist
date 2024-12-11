<template >
    <div class="min-h-screen bg-gray-100 py-10 flex items-center justify-center">
      <div class="max-w-2xl w-full mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-6 text-shadow-lg text-center">Kya Kya Krna hai</h1>
        <ul >
            <li class="flex justify-between items-center">
                <span class="text-[rgb(34,91,34)] rounded-md font-medium"> Completed :{{ completedTodos }}</span>
               <span class="text-[rgb(245,211,75)] rounded-md font-medium"> Pending :{{ pendingTodos }}</span>
            </li>
            
          <li v-for="(todo, index) in todos" :key="index" class="border-b py-3">
            <TodoSecond :todo="todo" :index="index"/>
          </li>
        </ul>
        <div class="mt-6">
          <TodoForm />
        </div>
      </div>
    </div>
  </template>
<script>
import TodoSecond from './TodoSecond.vue'
import TodoForm from './TodoForm.vue';
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
export default{
   components:{
    TodoSecond,
    TodoForm
   },
   computed:{
   ...mapState({
    todos:'todos'
   }),
   ...mapGetters({
    completedTodos:'completedTodos',
    pendingTodos:'pendingTodos'
   })
   }
}
</script>
