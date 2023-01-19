<template>
  <div id='Header'  class='Header'>
    <h1>TodoList</h1>
   <div class="input-box">
      <input type="text" class="todo-input" placeholder="请输入事项，按回车添加"
      v-model.trim="inputValue" @keyup.enter="inputHandler" ref="inputRef">
      <i class="iconfont icon-icon_nav_clost_line" @click="clearHandler"></i>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    todoList:{
      type:Array,
      default:()=>[]
    }
  },
  data () {
    return {
      inputValue:'',
    }
  },
  created () { 
    
  },
  computed: { 

  },
  components: { 

  },
  methods: {
    inputHandler(){
      if(this.inputValue === ''){
        alert('输入的项目名称不能为空!')
        return 
      }
      let isRepeat = this.todoList.some(item=>item.content === this.inputValue)
      
      if(isRepeat){
        alert('输入的项目名称不能重复!')
        return 
      }
      this.$emit('addTodo',this.inputValue)
      this.clearHandler()
    },
    clearHandler(){
      this.inputValue = ''
      this.$refs['inputRef'].focus()
    }
  },
  mounted () { 
    this.$refs['inputRef'].focus()
  },
  watch: { 

  }
}
</script>
<style scoped lang='scss'>
 .Header{
   text-align: center;
  //  position: relative;
   h1{
     color:#7BC0FC;
     font-size: 40px;
     height: 100px;
     line-height: 100px;
     text-align: center;
     border:3px solid #f5f5f5;
   }
   .input-box{
     display: flex;
     align-items: center;
     width: 530px;
     box-shadow:inset 0px 0px 5px #ddd;
     padding: 10px;
   }
   .todo-input{
     border:none;
     outline: none;
     height:40px;
     line-height: 40px;
     padding:0 20px;
     flex:1;
     box-sizing: border-box;
     font-size: 18px;
    //  border-radius: 5px;
   }
   .icon-icon_nav_clost_line{
        display: block;
        color: #c9c9c9;
        font-size: 18px;
        width: 32px;
        height: 32px;
        line-height: 34px;
        text-align: center;
        cursor: pointer;
   }
   ::placeholder {
      color: #ddd;
    }
 
 }
</style>