<template>
    <div 
    class="movie-box"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    >
        <Movieitem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        ></Movieitem>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import Movieitem from "./movieitem"
export default {
    components:{
        Movieitem
    },
    methods:{
        loadMore() {
            this.loading = true;
            if(!this.hasMovie){
                this.loading = true;
                Toast({
                    message: '没有数据了',
                    position: 'bottom',
                    duration: 1000
                    });
                return false
            }
            this.getMovies()
        },
        getMovies(){
            let instance = Toast({
                message: '加载中...',
                iconClass: 'fa fa-spinner fa-pulse'
                });
            this.loading = true;
            let {page,pageSize} = this;
            //let {page} = {this.page}
            this.$http.post("/jd/getCommodityList",{
                page,
                pageSize,
                keyWord:"笔记本电脑"
            }).then(res=>{
                instance.close()
                this.loading = false
                this.movies = this.movies.concat(res.data.data.dataList)
                
                if(this.page*this.pageSize >= res.data.data.total){
                    this.hasMovie = false
                    return false
                }
                this.page++
            })
        }
    },
    data(){
        return {
            movies:[],
            page:1,
            pageSize:10,
            loading:false,
            hasMovie:true
            
        }
    },
    activated(){
        this.loading = false;
    },
    deactivated(){
        this.loading = true;
    },
    created(){
        // this.$http.post("/jd/getCommodityList",{
        //     "page":this.page,
        //     "pageSize":this.pageSize,
        //     "keyWord":"笔记本电脑"
        // }).then(res=>{
        //     console.log(res.data.data.dataList)
        //     this.movies = res.data.data.dataList
        // })
    }
}
</script>

<style lang="scss">
.movie-box{
    width:100%;
    display: flex;
    justify-content: space-around;
     flex-wrap:wrap;
}

</style>