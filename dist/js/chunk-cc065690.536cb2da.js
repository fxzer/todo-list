(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc065690"],{"25ce":function(t,e,n){"use strict";n("7115")},"2e90":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Todos"}},[n("ul",{staticClass:"todo-list"},t._l(t.todoList,(function(t){return n("Item",{key:t.id,attrs:{todo:t}})})),1),n("footer",[n("span",{staticClass:"account"},[t._v(t._s(t.todoList.length)+"项")]),n("div",{staticClass:"menu"},t._l(t.menuList,(function(e){return n("span",{staticClass:"menu-item",class:t.currentMenu===e?"active":"",on:{click:function(n){return t.switchMenu(e)}}},[t._v(t._s(e))])})),0),n("span",{staticClass:"clear",on:{click:t.clearCompleted}},[t._v("清空已完成")])])])},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Item",attrs:{id:"Item"}},[n("li",{staticClass:"todo"},[n("input",{staticClass:"toggle",attrs:{id:"complete"+t.todo.id,type:"checkbox"},domProps:{checked:t.todo.complete},on:{change:function(e){return t.completeHandler(t.todo.id)}}}),n("label",{staticClass:"toggle-style",attrs:{for:"complete"+t.todo.id}}),t.todo.isEdit?n("input",{key:t.todo.id,ref:"editInputRef",staticClass:"input-content",attrs:{type:"text"},domProps:{value:t.todo.content},on:{blur:function(e){return t.handlerBlur(t.todo,e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handlerBlur(t.todo,e)}}}):n("label",{staticClass:"todo-content",class:t.todo.complete?"completed":"",attrs:{for:"complete"+t.todo.id}},[t._v(" "+t._s(t.todo.content))]),t.todo.isEdit?t._e():n("i",{staticClass:"iconfont icon-edit",on:{click:function(e){return t.editHandler(t.todo,e)}}}),t.todo.isEdit?t._e():n("i",{staticClass:"iconfont icon-icon_nav_clost_line",on:{click:function(e){return t.deleteHandler(t.todo.id)}}})])])},s=[],d=(n("2e8e"),n("d2cc"),{name:"Item",props:{todo:{type:Object}},inject:["todoList"],data:function(){return{}},created:function(){},computed:{},components:{},methods:{deleteHandler:function(t){this.$bus.$emit("deleteTodo",t)},editHandler:function(t){t.hasOwnProperty("isEdit")?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){this.$refs.editInputRef.focus()}))},handlerBlur:function(t,e){if(""!==e.target.value){var n=this.todoList.filter((function(e){return e.id!==t.id})).some((function(t){return t.content===e.target.value}));n?alert("输入的项目名称不能重复!"):(t.isEdit=!1,this.$bus.$emit("editTodo",t.id,e.target.value))}else alert("输入的项目名称不能为空!")},completeHandler:function(t){this.$bus.$emit("completeTodo",t)}},mounted:function(){},watch:{}}),r=d,u=(n("25ce"),n("52e0")),a=Object(u["a"])(r,c,s,!1,null,"550dabb8",null),l=a.exports,f={name:"Todos",props:{todoList:{type:Array,default:function(){return[]}}},data:function(){return{currentMenu:"全部",menuList:["全部","未完成","已完成"]}},created:function(){},computed:{},components:{Item:l},methods:{switchMenu:function(t){this.currentMenu=t,this.$emit("switchMenu",t)},clearCompleted:function(){this.$emit("clearCompletedDone")}},mounted:function(){},watch:{}},p=f,m=(n("4933"),Object(u["a"])(p,o,i,!1,null,"42a88487",null));e["default"]=m.exports},4933:function(t,e,n){"use strict";n("d3b3")},7115:function(t,e,n){},d3b3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cc065690.536cb2da.js.map