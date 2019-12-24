<template>
    <div class="HomePage border-1px">
        <HomePage></HomePage>
    </div>
</template>

<script>
import HomePage from "./HomePage"
export default {
    components:{
        HomePage
    }
}
</script>

<style lang="scss">
@import "@/stylesheets/_border-1.scss";
    .HomePage{
        @include border-bottom(1px,#111);
    }
</style>