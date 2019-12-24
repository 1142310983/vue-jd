<template>
    <router-link 
    class="movie-item"
    tag="div"
    :to="{name:'jddetail',params:{id:movie.id}}">
        <div class="img-box">
            <img v-lazy="movie.coverPicUrl" alt="">
        </div>
        <div class="deta">
            <div class="movie-name">
                <p class="">{{movie.name}}</p>
            </div>
            <div class="deta-message">
                <p class="pirce">￥{{movie.price}}</p>
                <p class="sale">销量:<span>{{movie.commentNumber}}</span></p>
            </div>
            <div class="from">
                <span>{{movie.sellerName}}</span>
                <img src="//img14.360buyimg.com/uba/jfs/t26764/156/1205787445/713/9f715eaa/5bc4255bN0776eea6.png" alt="">
            </div>
        </div>
    </router-link>
</template>

<script>

export default {
    props:{
        movie:Object
    }
}
</script>

<style lang="scss">
.movie-item{
    width:49%;  
    background:white;
    margin-top:10px;
    
    .img-box{
        width:100%;
        img{
            width:100%;
        }
    }
    .deta{
        .movie-name{
            height:40px;
            P{
                height:40px;
                overflow: hidden;
                text-overflow: ellipsis;  
            }
        }
        .deta-message{
            display: flex;
            justify-content: space-between;
            .pirce{
                color:red;
            }
            .sale{
                font-size: 10px;
                span{
                    font-size: 8px;
                    color:blue;
                font-weight: 500;
                }
            }
        }
         .from{
             height:16px;
            span{
                float: left;
                font-size:10px;
                color:#a79b9b;
            } 
            img{
                display: block;
                float: left;
            }      
        }
    }
    
}

</style>