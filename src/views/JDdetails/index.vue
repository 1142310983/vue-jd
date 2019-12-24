<template>
  <div>
      <mt-header fixed  title="" style="opacity:0.5;background:#fff">
        <router-link to="/home" slot="left">
            <mt-button icon="back" style="background:black;width:30px;height:30px;border-radius:50%;color:#fff;"></mt-button>
        </router-link>
        <mt-button 
            icon="more" 
            style="background:black;
            width:30px;
            height:30px;
            border-radius:50%;
            color:#fff;" 
            slot="right" >
        </mt-button>
    </mt-header>
    <img v-if="!goods" src="../../assets/loading.gif" alt="" 
        style="position:fixed;top:50%;
        left:50%;margin-left:-64px;
        margin-top:-64px"
    >
    <div v-else>
        <img width="100%" :src="goods.coverPicUrl" alt="">
        <p class="prix-a">￥{{goods.price}}</p>
        <p class="prix-b"><img src="https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/69566/30/15738/1062/5dd3abb6Ea8fd7aa3/57c6a72435905414.png" alt="">{{goods.name}}</p>
        <p>月销量：{{goods.commentNumber}}</p>
        <p>商家：{{goods.sellerName}}</p>
    </div>
    <div class="fotter">
        <div class="f1 iconfont">
            <span>&#xe617;</span>联系客服

        </div>
        <div class="f1 iconfont">
            <span>&#xe60c;</span>进店
        </div>
        <router-link 
        to="/shopcar" 
        tag="div"
        class="f1 iconfont">
            <span>&#xe60d;</span>
                购物车
            <p class="computed">{{computeTotal.num}}</p>
        </router-link>
        <div
        class="f2" 
        @click="addGoodCar(goods)"
        >加入购物车</div>
        <div class="f3">立即购买</div>
    </div>
  </div>
</template>

<script>
import {mapActions , mapGetters} from "vuex"
export default {
    data(){
        return {
            goods:null
        }
    },
    computed:{
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodCar"])
    },
    created(){
        let movieId = this.$route.params.id
        this.$http.get(`/jd/getCommodityDetail?id=${movieId}`,{
          page:1,
          pageSize:10,
          keyWord:"笔记本电脑"
        }).then(res=>{
          this.goods = res.data.data
        })
    }
}
</script>

<style lang="scss">
    .prix-a{
        font-size:26px; 
        color:red;
        span{
            font-size:20px;
        }
    }
    .prix-b{
        font-size:16px;
        color:black;
        font-weight: 900;
        img{
            width:26px;
            height:16px;
            padding:0 5px;
        }
    }
    .shopcar{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .fotter{
        height:50px;
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .f1{
            width:15%;
            height:50px;
            font-size:12px;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            span{
                font-size:22px;
            }
            .computed{
                position: absolute;
                left:33px;
                top:3px;
                width:15px;
                height:15px;
                line-height: 15px;
                text-align: center;
                background:red;
                color:#fff;
                border-radius:50%;
            }
        }
        .f2{
            width:27.5%;
            height:50px;
            background:orange;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color:#fff;
        }
        .f3{
            width:27.5%;
            height:50px;
            background:red;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color:#fff;
        }
        
    }
</style>