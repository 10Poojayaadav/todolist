<template>
    <div class="flex justify-between items-center">
      <span class="text-gray-700" :class="{ 'completed': todo.completed, 'animate-jump': !todo.completed }"
      :style="!todo.completed ? { animationDelay: `${index * 0.2}s` } : {}" @click="toggleTodo(todo)">{{ todo.title }}</span>
      <button class="bg-red-700 text-white rounded-md py-2 px-3" @click="deleteTodo(todo)">Delete</button>
    </div>
  </template>
<script>
import {mapActions} from 'vuex';
import Swal from "sweetalert2";
export default{
 components:{
   
 },
  props:{
    todo:{
        type:String,
        default:"",
    },
    index:{
        type:[Number, String],
        default:"",
    }
  },
  mounted() {
    console.log("todo", this.todo);
  },
  methods:{
    ...mapActions({
        // deleteTodo:'deleteTodo' ,
        toggleTodo:'toggleTodo'
    }),
    deleteTodo(todo) {
    this.$store.dispatch('deleteTodo', this.todo);
      Swal.fire({
        title: "Deleted!",
        text: "The todo has been successfully removed.",
        icon: "success",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__bounceIn",
        },
        hideClass: {
          popup: "animate__animated animate__bounceOut",
        },
      }).then(() => {
        // Emit delete event after confirmation
        this.$emit("delete", todo);
      });
    },
  }
}
</script>
<style scoped>
.completed{
    text-decoration: line-through;
}
</style>
