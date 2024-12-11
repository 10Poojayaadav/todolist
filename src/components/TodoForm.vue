<template>
   <div class="flex flex-col">
    <input type="text" class="border border-1 border-gray-800 rounded-md p-1 max-w-[200px] mx-auto" v-model="todoItem">
    <button class="bg-gray-200 rounded-md px-3 py-2 mt-4 max-w-[200px] mx-auto" @click="addNewItem">Submit</button>
   </div> 
</template>
<script>
export default{
   data(){
    return{
        todoItem:"",
    }
   },
   methods:{
    addNewItem(){
        this.$store.dispatch('addNewTodo', this.todoItem);
        this.todoItem = "";
    }
   }
}
</script>
