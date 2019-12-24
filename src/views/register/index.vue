<template>
    <div>
        <mt-header style="background:#fff" title="京东登录注册">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field  placeholder="用户名/邮箱/手机号" ></mt-field>
        <mt-field  placeholder="请输入密码" type="password" ></mt-field>
        <mt-button type="danger" size="large" class = "enter">登录</mt-button>
        <mt-button type="danger" size="large" class="is-plain enter"  >一键登录</mt-button>
        <div class="verifier">
            <p>短信验证码登录</p>
            <p>手机快速注册</p>
        </div>
        <div class="icon"> 
            <fieldset disabled="disabled">
                <legend align="left/center/right/justify">其他登录方式</legend>
                <div class="qw">
                    <div class="qq">
                        <p class="fa fa-qq"></p>
                        <i>QQ</i>
                    </div>
                    <div class="weixin">
                        <p class="fa fa-weixin"></p>
                        <i>微信</i>
                    </div>
                </div>
                <div class="jdys">
                    登录即代表您已同意<span>京东隐私策略</span>
                </div>
                
            </fieldset>
            
            
        </div>
        <tabbar></tabbar>
    </div>
  
  
</template>

<script>
import tabbar from "../../components/Tabbar/index"
export default {
    components:{
        tabbar
    }
}
</script>

<style lang="scss">
*{
    padding:0;
    margin:0;
}
.enter{
    border-radius: 50px;
    margin:20px auto;
    width:80%;
}
.mint-header{
    background:#ffffff;
    color: black;
    font-size:16px;
    margin-bottom: 20px;
    border:none;
    .mint-header-title{
        font-size:16px;
    }
}
.mint-cell-wrapper{
    border:none;
    border-bottom:1px solid #fafafa;
}
.verifier{
    display: flex;
    justify-content: space-between;
    color:rgba(0,0,0,0.4)
}
.icon{
    .qw{
        display: flex;
        justify-content: space-around;
    }
    .qq{
        display: flex;
        flex-direction: column;
        width:48px;
        height:69px;
        justify-content: center;
        align-items: center;
        i{
            font-size: 12px;
        }
    }
    .weixin{
        display: flex;
        flex-direction: column;
        width:48px;
        height:69px;
        justify-content: center;
        align-items: center;
        i{
            font-size:12px;
        }
    }
    p{
        width:40px;
        height:40px;
        border-radius:50%;
        background:chocolate;
        text-align: center;
        line-height: 40px;
        font-size:26px;
    }
    .fa-qq{
        color:#4a90e2;
        background:skyblue;
    }
    .fa-weixin{
        color:rgb(4, 196, 4);
        background:rgb(183, 238, 132);
    }
    fieldset {
        text-align: center;
        border:none;
        border-top:1px solid #d3cfcf;
        font-size:14px;
        width:90%;
        margin:88px auto;
       legend{
            padding:0 15px;
            color:0,0,0,0.1;
       }
    }
    .jdys{
        margin-top:15px;
        font-size: 12px;
        span{
            color:skyblue;
        }
    }
    
}

</style>