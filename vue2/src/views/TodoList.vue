<template>
  <div id="TodoList" class="TodoList">
    <Header @addTodo="addTodoDone" :todoList="todoList"></Header>
    <List
      :todoList="computeList"
      @deleteTodo="deleteDone"
      @editTodo="editDone"
      @completeTodo="completeDone"
      @switchMenu="switchDone"
      @clearCompletedDone="clearCompletedDone"
    ></List>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "TodoList",
  provide(){
    return {
      'todoList':this.todoList
    }
  },
  props: {},
  data() {
    return {
      todoList:JSON.parse(localStorage.getItem('todoList')) || [],
      computeList: [],
      currentMenu:'全部'
    };
  },
  created() {},
  computed: {
    
  },
  components: {
    Header: () => import("../components/Header.vue"),
    List: () => import("../components/List.vue")
  },
  methods: {
    addTodoDone(val) {
      this.todoList.unshift({ id:nanoid(), complete: false, content: val });
    },
    deleteDone(id) {
      this.todoList = this.todoList.filter((item) =>   item.id !== id );
    },
    editDone(id,content){
       this.todoList = this.todoList.map((item) => {
        if (item.id === id) {
           item.content = content;
        }
        return item;
      });
    },
    completeDone(id) {
      this.todoList = this.todoList.map((item) => {
        if (item.id === id) {
        item.complete = !item.complete;
        }
        return item;
      });
    },
    switchDone(val){
      this.currentMenu = val
    },
    clearCompletedDone(){
      this.todoList = this.todoList.filter((item) =>   !item.complete );
    }
  },
  mounted() {
    this.$bus.$on('deleteTodo',this.deleteDone )
    this.$bus.$on('completeTodo',this.completeDone )
    this.$bus.$on('editTodo',this.editDone )
  },
  watch: {
    currentMenu:{
      immediate:true,
      handler(val){
        if( val === '全部'){
           this.computeList  = this.todoList
        }else if(val === '未完成'){
          this.computeList = this.todoList.filter((item)=> !item.complete)
        }else{
         this.computeList = this.todoList.filter((item)=>item.complete)
        }
         
     }
    },
    todoList:{
      deep:true,
      handler(val){
        this.computeList = val
        localStorage.setItem('todoList',JSON.stringify(val))
      }
    }
  },
};
</script>
<style scoped lang="scss">
.TodoList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
