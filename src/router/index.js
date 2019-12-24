import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./home"
import article from "./article"
import jddetail from "./jddetail"
import shopcar from "./shopcar"
import mine from "./mine"
import classifier from "./classifier"
import jingxi from "./jingxi"
import register from "./register"
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    home,article,jddetail,shopcar,mine,classifier,jingxi,register,
    {path:"/",redirect:"/home"},
    {path:"*",redirect:"/404"},
    {path:"/404",component:()=>import("@/views/Notfound")},
  ]
})

export default router
