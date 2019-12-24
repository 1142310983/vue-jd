<template>
  <div>
      <Classification></Classification>
      <Lister></Lister>
      <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../../components/Tabbar/index"
import Lister from "../../components/Lister/index"
import Classification from "../../components/Classification/index"
export default {
    components:{
        tabbar,Lister,Classification
    }
}
</script>

<style>

</style>