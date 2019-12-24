<template>
    <div class="header">
        <mt-button class="fa fa-bars buttom1" style="background:red;border:none;color:#fff;"></mt-button>
        <div class="moteur">
            <p>JD</p>
            <i class="fa fa-search"></i>
            <input type="text" placeholder="惠普笔记本">
        </div>
        <router-link tag="div" class="register" to="/register">登录</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        .header{
            height: 44px;
            display: flex;
            width:100%;
            justify-content: space-between;
            position: fixed;
            z-index: 10;
            background: red;
            left:0;
            top:0;
            .buttom1{
                color:#111;
                font-size: 16px;
            }
           
        }
        .moteur{
            display: flex;
            margin-top:7px;
            width:70%;
            height:30px;
            background:#fff;
            border-radius:30px;;
            p{
                width:15%;
                height:30px;
                text-align: center;
                line-height:30px;
                font-size:20px;
                color:red;
            }
            i{
                height: 30px;
                width:15px;
                line-height:30px;
                margin-left:10px;
                font-size:16px; 
            }
            input{
                font-size:12px;
                color: black;
                height:30px;
                width: 55%;
                border:none;
            }
        }
        .mint-header{
            background-color: red;
            font-size: 22px;
            color: black;
        }
        .register{
            padding-top:2px;
            height:44px;
            width: 44px;
            font-size: 14px;
            line-height: 40px;
            color:#fff;
        }
    }
</style>