<template>
  <div class="home">
      <HomePage></HomePage>
      <div>
        <Banner></Banner>
      </div>
      <div class="home-img">
        <img src="@/assets/123.png" alt="">
      </div>
      <div>
        <Moviebox></Moviebox>
      </div>
        <BackTop></BackTop>
        <Tabbar></Tabbar>
  </div>
</template>

<script>
import BackTop from "./BackTop"
import Banner from "@/components/Banner"
import Moviebox from "./movieBox"
import Tabbar from "../../components/Tabbar/index"
import HomePage from "../../components/HomePage/index"
export default {
  name:"home",
  components:{
    Banner,Moviebox,BackTop,Tabbar,HomePage
  },
  methods:{
    listenScroll(){
         let sTop = document.documentElement.scrollTop || document.body.scrollTop
        if(sTop >= 300){
          this.isFixed = true
        }else{
          this.isFixed = false
        }
    }
  },
   beforeRouteLeave(to,from,next){
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      next()
    },
    activated(){
       window.addEventListener("scroll",this.listenScroll)
       window.scrollTo(0,this.scrollTop)
    },
    deactivated(){
       window.removeEventListener("scroll",this.listenScroll)
        this.isFixed = false
    },
    created(){
      
    }
  
}
</script>

<style lang="scss">
  .home{
    background: #eee;
    padding:45px 0 50px;
      .home-img{
        width:100%;
        img{
          width:100%;
        }
    }
  }
</style>