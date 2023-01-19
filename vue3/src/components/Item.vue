<template>
  <div id='Item' class='Item'>
    <li class="todo">
      <input :id="'complete' + todo.id" type="checkbox" class="toggle" :checked="todo.complete"
        @change="emit('completeTodo')" />
      <label :for="'complete' + todo.id" class="toggle-style"> </label>
      <label :for="'complete' + todo.id" class="todo-content" v-if="!todo.isEdit"
        :class="todo.complete ? 'completed' : ''">
        {{ todo.content }}</label>
      <input type="text" :key="todo.id" class="input-content" ref="editInputRef" :value="todo.content" v-else
        @blur="handlerBlur(todo, $event)" @keyup.enter="handlerBlur(todo, $event)" />
      <i class="iconfont icon-edit" @click="editHandler(todo, $event)" v-if="!todo.isEdit"></i>
      <i class="iconfont icon-icon_nav_clost_line" @click="emit('deleteTodo')" v-if="!todo.isEdit"></i>
    </li>
  </div>
</template>

<script lang="ts"  setup>
import { Ref } from 'vue';

const { todo } = defineProps(['todo'])
const emit = defineEmits<{
  (event: 'editTodo', id: string, content: string)
  (event: 'completeTodo')
  (event: 'deleteTodo')
}>()
const todoList: Ref<TodoItem[]> = inject('todoList')
const editInputRef = ref<HTMLInputElement>(null)
const editHandler = (todo, e) => {
  todoList.value.forEach(item => item.isEdit = false)
  todo.isEdit = true
  nextTick(() => {
    editInputRef.value.focus()
  })
}
const handlerBlur = (todo, e) => {
  if (e.target.value === '') {
    alert('输入的项目名称不能为空!')
    return
  }
  let isRepeat = todoList.value.filter(item => item.id !== todo.id).some(item => item.content === e.target.value)
  if (isRepeat) {
    alert('输入的项目名称不能重复!')
    return
  }
  todo.isEdit = false
  emit('editTodo', todo.id, e.target.value)
}
</script>
<style scoped lang='scss'>
.Item {

  // 单个事项
  .todo {
    height: 55px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;

    &:hover {
      background-color: #E8F7FF;
    }

    &:hover .icon-icon_nav_clost_line {
      display: block;
    }

    &:hover .icon-edit {
      display: block;
    }

    .toggle {
      display: none;
    }

    .toggle:checked+.toggle-style::before {
      display: block;
      content: "\2714";
      text-align: center;
      font-size: 24px;
      color: rgb(80, 214, 47);
    }

    .toggle-style {
      width: 30px;
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 50%;
      cursor: pointer;
    }

    .todo-content {
      height: 100%;
      padding: 0 15px;
      cursor: pointer;
      flex: 1;
      font-size: 18px;
      line-height: 55px;
    }

    .input-content {
      // width: 420px;
      height: 40px;
      margin: 0 10px;
      padding: 8px;
      outline: none;
      cursor: pointer;
      flex: 1;
      font-size: 18px;
      line-height: 40px;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px #9FD4FD;
      border-radius: 8px;
      box-sizing: border-box;
    }

    .completed {
      color: #babcc7;
      text-decoration: line-through;
    }

    .icon-edit,
    .icon-icon_nav_clost_line {
      display: none;
      font-size: 18px;
      width: 32px;
      height: 32px;
      line-height: 34px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
    }

    .icon-edit {
      color: #3491FA;
    }

    .icon-icon_nav_clost_line {
      color: #f53f3f;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: rotate(180deg);
        font-weight: 600;
      }
    }
  }
}
</style>