<template>
  <div class="lister">
        <ul class="fliter">
            <li
                :class="['fliter-li',{active:num===nav.num}]"
                v-for="nav in navs"
                :key="nav.id"
                @click="num=nav.num"
            >
            {{nav.title}}
            </li>
        </ul>
        <ul class="fliter-item">
            <li
             v-for="good in goods"
             :key="good.id"
             >
             <img :src="good.img" alt="">
             {{good.name}}
             </li>          
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num:0,
            goods:[],
            navs:[
                {id:1,title:"热门推荐",num:0},
                {id:2,title:"手机数码",num:1},
                {id:3,title:"家用电器",num:2},
                {id:4,title:"电脑办公",num:3},
                {id:5,title:"计生情趣",num:4},
                {id:6,title:"美妆护肤",num:5},
                {id:7,title:"个护清洁",num:6},
                {id:8,title:"汽车生活",num:7},
                {id:9,title:"京东超市",num:8},
                {id:10,title:"男装",num:9},
                {id:11,title:"男鞋",num:10},
                {id:12,title:"女装",num:11},
                {id:13,title:"女鞋",num:12},
                {id:14,title:"母婴童装",num:13},
                {id:15,title:"图书音像",num:14},
                {id:16,title:"运动户外",num:15}
            ],
            
        }
    },
    watch:{
        num(val){
            this.$http.get("/vue-jd/classfier.json").then(res=>{
                let shop = res.data.data
                this.goods =  shop[val].produit
            })
        }
    },
    created(){
        this.$http.get("/vue-jd/classfier.json").then(res=>{
            let shop = res.data.data
            this.goods =  res.data.data[this.num].produit
        })
    }
}
</script>

<style lang="scss">
    .fliter{
        display: flex;
        flex-direction: column;
        width:85px;
        height:5.7rem;
        float: left;
        overflow: auto;
        margin-bottom:50px;
        
        .fliter-li{
            height:46px;
            background:#fafafa;
            text-align: center;
            line-height:46px;
        } 
    }
    .fliter::-webkit-scrollbar {
         width: 0 !important 
        }
    .active{
        color:red;
    }
    .fliter-item{
        width:78%;
        position: absolute;
        right:0;
        top: 44px;
        background:#ffffff;
        li{
            width:28%;
            height:40%;
            float: left;
            margin:0 7px;
            text-align: center;
            font-size:12px;
            img{
                width:100%;
            }
        }
    }
</style>