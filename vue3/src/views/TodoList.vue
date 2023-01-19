<template>
  <div id="TodoList" class="TodoList">
    <Header @addTodo="addTodoDone" :todoList="todoList"></Header>
    <List   @deleteTodo="deleteDone" @editTodo="editDone" @completeTodo="completeDone"
      @switchMenu="switchDone" @clearCompletedDone="clearCompletedDone"></List>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue"
import List from "@/components/List.vue"

const todoList = ref<TodoItem[]>(JSON.parse(localStorage.getItem('todoList')) || [])
const generateId = () => Math.random().toString(36).slice(4, 8)
const computeList = ref<TodoItem[]>([])
provide('todoList',computeList)
const currentMenu = ref('全部')
const addTodoDone = (content: string) => {
  todoList.value.unshift({ id: generateId(), complete: false, content });
}
const deleteDone = (id) => {
  todoList.value = todoList.value.filter((item) => item.id !== id);
}
const editDone = (id, content) => {
  todoList.value = todoList.value.map((item) => {
    if (item.id === id) {
      item.content = content;
    }
    return item;
  });
}
const completeDone = (id) => {
  todoList.value = todoList.value.map((item) => {
    if (item.id === id) {
      item.complete = !item.complete;
    }
    return item;
  });
}
const switchDone = (val) => {
  currentMenu.value = val
}
const clearCompletedDone = () => {
  todoList.value = todoList.value.filter((item) => !item.complete);
}
watch(currentMenu, (val) => {
  if (val === '全部') {
    computeList.value = todoList.value
  } else if (val === '未完成') {
    computeList.value = todoList.value.filter((item) => !item.complete)
  } else {
    computeList.value = todoList.value.filter((item) => item.complete)
  }
}, {
  immediate: true,
})
watch(todoList,(list)=>{
  computeList.value = list
  localStorage.setItem('todoList', JSON.stringify(list))
},{deep:true})
</script>
<style scoped lang="scss">
.TodoList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
