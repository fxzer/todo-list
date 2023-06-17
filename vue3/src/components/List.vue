<template>
  <div id="Todos">
    <ul class="todo-list">
      <transition-group name="fade" @enter="addTodoTransition" @leave="deleteTodoTransition" >
      <Item v-for="item in todoList" :todo="item" :key="item.id"
        @deleteTodo="emit('deleteTodo', item.id)"
        @completeTodo="emit('completeTodo', item.id)"
        @editTodo="editTodo" />
      </transition-group>
    </ul>
    <footer>
      <span class="account">{{ todoList.length }}项</span>
      <div class="menu">
        <span class="menu-item" :class="currentMenu === item ? 'active' : ''" v-for="item in menuList"
          @click="switchMenu(item)">{{ item }}</span>
      </div>
      <span class="clear" @click="clearCompleted">清空已完成</span>
    </footer>
  </div>
</template>

<script lang="ts"  setup>
import { gsap } from 'gsap';
import Item from './Item.vue';
const todoList: TodoItem[] = inject('todoList')
const currentMenu = ref('全部')
const menuList = reactive(['全部', '未完成', '已完成'])
const emit = defineEmits<{
  (event: 'switchMenu', val: string): void,
  (event: 'clearCompletedDone'): void,
  (event: 'deleteTodo', id: string): void
  (event: 'completeTodo', id: string): void
  (event: 'editTodo',id:string,content:string): void
}>()
const switchMenu = (val) => {
  currentMenu.value = val
  emit('switchMenu', val)
}
const clearCompleted = () => {
  emit('clearCompletedDone')
}
const editTodo = (id,content) =>{
  emit('editTodo' ,id,content)
}

const addTodoTransition = (item) => {
  gsap.from(item, { opacity: 0, y: -20, duration: 0.5 });
};

const deleteTodoTransition = (item) => {
  gsap.fromTo(
    item,
    { opacity: 1, y: 0 },
    {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        // 触发删除事件，通知父组件删除该项目
        emit('deleteTodo', item.id);
      }
    }
  );
};

</script>
<style scoped lang="scss">
#Todos {
  width: 550px;
  border-top: none;
  box-shadow: 0px 2px 5px #ddd;

  .todo-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  // 
  footer {
    display: flex;
    height: 50px;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;

    span {
      padding: 5px 8px;
      border: 1px solid #ddd;
      border-radius: 5px;
      transition: .2s ease-in-out;
    }
  }

  .menu {
    display: flex;
    width: 200px;
    justify-content: space-around;

    .menu-item:nth-of-type(1) {
      color: #3491FA
    }

    .menu-item:nth-of-type(2) {
      color: #F754A8
    }

    .menu-item:nth-of-type(3) {
      color: #23C343
    }

    // 激活菜单
    .active {
      background-color: #f2f3f5;
      border: 2px solid #9FD4FD;
    }

  }

  .menu-item,
  .clear {
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 3px #ddd;
      transform: scale(1.01);
    }
  }

  .account {
    color: #722ED1
  }

  .clear {
    color: #F7BA1E;
  }
}

.fade-leave-active {
  transition:  all .3s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
