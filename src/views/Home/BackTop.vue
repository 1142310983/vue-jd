<template>
    <div  class="back-top-box" v-if="isShow" v-backtop>
        <div class="back-top">
            <i class="fa fa-arrow-circle-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:true
        }
    },
    methods:{
        // backTop(){
        //     window.scrollTo(0,0)
        // },
        handleScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=200 && !this.isShow){
                this.isShow = true
            }else if(sTop<200 && this.isShow){
                this.isShow = false
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.handleScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.handleScroll)
    },
}  
</script>

<style lang="scss">
    .back-top-box{
        position: fixed;
        right:20px;
        bottom:80px;
        width:.4rem;
        height:.4rem;
        background: rgba(0,0,0,0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color:#000;
    }
</style>
