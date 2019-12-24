import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import 'mint-ui/lib/style.css'
import "@/modules/directive"
import "./style/main.scss"
import "swiper/css/swiper.min.css"
import "../src/modules/rem"
Vue.prototype.$http = axios;
Vue.config.productionTip = false
import { Header , Button , Tabbar, TabItem ,Cell ,InfiniteScroll, Lazyload, Search , Field} from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.use(Lazyload);
Vue.component("mt-header", Header);
Vue.component("mt-button",Button)
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);
Vue.component("mt-search", Search);
Vue.component("mt-field", Field);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
