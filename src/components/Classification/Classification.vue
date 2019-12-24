<template>
    <div class="header1">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <div class="fa fa-search">
            <input type="text" placeholder="1223">
        </div>
        <mt-button icon="more" slot="right"></mt-button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/stylesheets/_border-1.scss";
    .header1{
        background:#fff;
        display: flex;
        justify-content: space-between;
        .mint-button{
            background:#fff;
            border:none;
            box-shadow: none;
        }
        .fa-search{
            width:70%;
            height:30px;
            margin-top:5px;
            padding-left:10px;
            border-radius:30px;
            background:#fafafa;
            line-height: 30px;
            input{
                width:70%;
                
                
               
                border:none;
                background:#fafafa;
            }
        }
        
    }
</style>