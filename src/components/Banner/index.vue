<template>
  <div class="swiper-container banner">
      <div class="swiper-wrapper" >
          <div
          class="swiper-slide"
          v-for="banner in banners"
          :key="banner.id"
          >
              <img :src="banner.img" alt="">
          </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[
                {id:1,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/84690/16/6957/86321/5df7530bEa205e746/f294ee0a7fb60f57.jpg.dpg"},
                {id:2,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/47824/26/11450/107215/5d84a3a5E81ba533e/a30ccd130288bd5a.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
                {id:3,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/104516/4/1145/84943/5dbab7e5E81ad7d53/c886c76d1c2d0236.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
                {id:4,img:"//imgcps.jd.com/ling4/100009791870/5pSS5py65LmQ6Laj/6Ieq5bex6YCJ77yM5q-P5Liq6YO95ruh5oSP/p-5d91a4f642dd5b7c7d52cbbd/050e7a18/cr_1125x445_0_171/s1125x690/q70.jpg"},
                {id:5,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/106760/10/6758/97168/5df5cf37E1454499d/0da6b61553ac992d.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
                {id:6,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/31746/32/1528/111163/5c500f8aEe3c6c0e7/0e1519939f544e8d.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
                {id:7,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/103304/29/6990/113193/5df76321Ecc2fd79a/5172753cf5f53434.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
                {id:8,img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/67166/11/11137/55609/5d889693Ed343bb37/47df9055ddec4dab.jpg!cr_1125x445_0_171!q70.jpg.dpg"},
            ]
        }
    },
    created(){
        this.$nextTick(()=>{
        new Swiper(".banner",{
            loop: true, // 循环模式选项
            autoplay:{
                disableOnInteraction:false,
            },
            speed:1000,
            
            pagination: {
            el: '.swiper-pagination',
            },
            

        })   
        })
    }
}

</script>

<style lang="scss">
    .banner{
        width:100%;
        height:149px;
        
        img{
            width:100%;
            height:100%;
        }
        
    }
</style>