import Vue from "vue"

//v-backtop
//一些与dom相关的业务逻辑代码，可以封装到自定义指令上面去，实现通用！
//自定义指令钩子函数  bind inserted updated componentUpdated unbind
//钩子函数里面的参数  el binding vnode

Vue.directive("backtop",{
    inserted(el,binding,vnode){
        let eventClick = binding.arg || "click"
        el.addEventListener(eventClick,e=>{
            window.scrollTo(0,0)
        })
    }
})