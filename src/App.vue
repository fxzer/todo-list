<template>
  <div id="app">
    

    <TodoList class="todo-list"/>
    
    <vue-particles
      color="#7BC0FC"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    >
    <router-view/>
    </vue-particles>
  </div>
</template>

<script>
import Vue from 'vue'
 
export default {
  name:'App',
  components:{
    TodoList:()=>import('./views/TodoList.vue')
  },
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}
</script>

<style lang="scss">
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
