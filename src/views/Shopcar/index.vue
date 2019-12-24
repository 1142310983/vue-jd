<template>
  <div class="car-box">
    <mt-header title="购物车">
        <router-link to="/home" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <BackTop></BackTop>
    <div class="goods"
    v-for="good in goods"
    :key="good.id"
    >   
        <div class="good-left">
            <img slot="icon" :src="good.coverPicUrl" width="100" height="100">
        </div>
        <div class="price">
            <div class="plugin">{{good.name}}</div>
            <div class="plugin-box">
                <div class="price-num">￥{{good.price}}</div>
                <div class="plugin-button">
                    <button @click="reduceGoodInCar(good)">-</button>
                    <span>{{good.num}}</span>
                    <button @click="addGoodCar(good)">+</button>
                </div>
            </div>
            <div class="plugin-delect" @click="removeGoodInCar(good)">删除</div>
        </div>
    </div>
    <div class="bottom">
        <p class="total">总计:<span>￥{{computeTotal.price}}</span></p> 
        <p class="clore">去结算<span>({{computeTotal.num}}件)</span></p>
    </div>
  </div>
</template>

<script>
import {mapState , mapActions , mapGetters} from "vuex"
import BackTop from "../Home/BackTop"
export default {
    components:{
        BackTop
    },
    computed:{
        ...mapState({
            goods:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodCar","reduceGoodInCar","removeGoodInCar"])
    },
   
}
</script>

<style lang="scss">
    *{
        margin:0;
        padding:0;
    }
    body{
        background:#fafafa;
    }
    .car-box{
        margin-bottom:50px;
    }
    .mint-header{
        color:black;
        background: #fff;
        height:50px;
        font-size:18px;
        border-bottom:1px solid #ccc;
    }
    .goods{
        width:100%;
        height:136.6px;
        display: flex;
        background:#fff;
        border-bottom:1px solid #ccc;
        margin-bottom:10px;
        .good-left{
            margin-left:50px;
        }
        .plugin{
            font-size:14px;
            height:40px;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;  //显示文字行数。
            overflow:hidden;
            margin-bottom:20px;
        }
        .plugin-box{
            display: flex;
            justify-content: space-between;
            margin-bottom:10px;
            .price-num{
                color:red;
            }
            .plugin-button{
                display: flex
            }
            span{
                display: block;
                width:20px;
                height:20px;
                text-align: center;
                line-height:20px;
            }
            button{
                width:20px;
                height:20px;
            }
        }
        .plugin-delect{
            float: right;
            font-size:14px;
            color: #ccc;
        }
        
    }
    .bottom{
        height:50px;
        width:100%;
        position: fixed;
        left:0;
        bottom:0;
        background:#fff;
        display: flex;
        justify-content: flex-end;
        .clore{
            width:110px;
            height:50px;
            line-height: 50px;
            margin-left:10px;
            background:red;
            text-align: center;
            color: #fff;
            font-weight: 900;
            span{
                font-size:14px;
                font-weight: 600;
            }
        }
        .total{
            line-height: 50px;
            font-weight: 900;
            span{
                color:red;
            }
        }
    }
</style>