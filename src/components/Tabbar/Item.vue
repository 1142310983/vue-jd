<template>
  <div class="item">
      <span v-if="isShow"><slot name="activeImg"></slot></span>
      <span v-else @click="bottomClick"><slot name="normalImg"></slot></span>
  </div>
</template>

<script>
export default {
  props:["txt","mark","selected",],
  computed: {
    isShow(){
      if(this.mark === this.selected){
        return true
      }
      return false
    }
  },
  methods: {
    bottomClick(){
      // 需要更改父组件的selected值
      // this.changeSelected(this.mark)
      this.$emit("changeSelected",this.mark)
      this.$router.push("/"+ this.mark)
    }
  }
}
</script>

<style lang="scss">
  .item{
    flex: 1;
    display: flex;
    align-items: center;
    img{
      width: 64px;
    }
  }
</style>