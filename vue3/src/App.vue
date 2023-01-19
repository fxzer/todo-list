<template>
    <TodoList class="todo-list"/>
</template>
<script setup lang='ts'>
import TodoList from './views/TodoList.vue'
</script>
<style scoped lang='scss'>
 @import url('//at.alicdn.com/t/font_2851497_pl3kf6ogwc8.css');
 *{
   font-family:Courier ;
   
 }
 #particles-js{
   position: absolute;
   top:0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: -1 !important;
 }
 .todo-list{
   z-index: 999 !important;
 }
</style>