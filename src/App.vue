<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  created(){
    // this.$router.push("/")
    this.$store.dispatch("initCars")
  }
}
</script>

<style lang="scss">

</style>
