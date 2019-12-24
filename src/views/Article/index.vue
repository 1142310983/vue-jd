<template>
  <div>
    <mt-header title="商品列表">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-link
    tag="div"
    :to="{name:'jddetail',params:{id:shop.id}}"
    v-for="shop in shops"
    :key="shop.id"

    >
      <img width="100%" height="400px" :src="shop.coverPicUrl" alt="">
      <p>￥{{shop.price}}</p>
      <p>{{shop.name}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  components:{
    
  },
  data(){
    return {
      shops:[]
    }
  },
  created(){
    this.$http.post("/jd/getCommodityList",{
      page:1,
      pageSize:10,
      keyWord:"笔记本电脑"
    }).then(res=>{
      this.shops = res.data.data.dataList
    })
  }
}
</script>

<style>
</style>