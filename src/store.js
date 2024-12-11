import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos:[
        {
            title:'todos item one',
            completed:false,
        },
        {
            title:'todos item two',
            completed:false,
        }
    ]
  },
  mutations: {
   NEW_TODO(state, todoItem){
    state.todos.push({
        title:todoItem,
        completed:false,
    })
   },
   DELETE_TODO(state, todoItem){
    let index = state.todos.indexOf(todoItem);
    state.todos.splice(index, 1);
   },
   TOGGLE_TODO(state, todoItem){
    todoItem.completed = !todoItem.completed;
   }
  },
  actions: {
    addNewTodo({commit}, todoItem){
        commit('NEW_TODO', todoItem);
    },
    deleteTodo({commit}, todoItem){
        commit('DELETE_TODO', todoItem);
    },
    toggleTodo({commit}, todoItem){
        commit('TOGGLE_TODO', todoItem);
    }
  },
  getters:{
    completedTodos(state){
        return state.todos.filter(todo=>{
            return todo.completed === true;
        }).length;
    },
    pendingTodos(state){
        return state.todos.filter(todo=>{
            return todo.completed === false;
        }).length;
    }
  }
});

export default store;
