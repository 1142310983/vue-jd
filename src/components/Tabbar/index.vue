<template>
  <div class="bottom">
        <Item
         :txt="nav.txt" 
         :mark="nav.mark" 
         :key="nav.id"
         :selected="selected" 
         v-for="nav in navs"
        >
            <img slot="activeImg" :src="nav.activeImg" alt="">
            <img slot="normalImg" :src="nav.normalImg" alt="">
        </Item>
  </div>
</template>

<script>
import Item from "./Item"
export default {
    methods: {
        changeSelected(selected){
            this.selected = selected;
        },
    },
    data() {
        return {
            selected:this.$route.name,
             navs:[
                {id:1,txt:"首页",mark:"home",activeImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png",
                normalImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png"},
                {id:2,txt:"分类",mark:"classifier",activeImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png",
                normalImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"},
                {id:3,txt:"京喜",mark:"Jingxi",activeImg:"https://img11.360buyimg.com/jdphoto/jfs/t1/92407/28/6423/13245/5df36419E454c9c94/9fe642436e5445bd.gif",
                normalImg:"https://img11.360buyimg.com/jdphoto/jfs/t1/92407/28/6423/13245/5df36419E454c9c94/9fe642436e5445bd.gif"},
                {id:4,txt:"购物车",mark:"Shopcar",activeImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png",
                normalImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"},
                {id:5,txt:"我的京东",mark:"register",activeImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png",
                normalImg:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png"}
            ]
        }
    },
    components:{
        Item
    }
}
</script>

<style lang="scss">
    .bottom{
        box-shadow: 0px -1px 10px rgba(0,0,0,0.9);
        background:#fff;
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;  
    }
</style>