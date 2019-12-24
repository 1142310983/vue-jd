import { MessageBox } from 'mint-ui';
export default {
    initCars(ctx){
        let cars = getCars()
        ctx.commit("changeCars",cars)
    },
    addGoodCar(ctx,goods){
        setTimeout(()=>{
            //获取后端传来的购物车
            let cars = getCars()
            let isHas = cars.some(item=>{
                if(item.id === goods.id){
                    item.num++
                    return true
                }
            })
            if(!isHas){//如果没有传入商品
                goods.num = 1
                cars.push(goods)
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)  
            ctx.commit("changeCars",cars)
        },50)
    },
    reduceGoodInCar(ctx,goods){
        let cars = getCars()
        cars = cars.filter(item=>{
            if(item.id === goods.id){
                item.num--
                if(item.num <1){
                    item.num = 1
                    MessageBox.alert("该商品一件起售")
                }
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)  
        ctx.commit("changeCars",cars)
    },
    removeGoodInCar(ctx,goods){
        let cars = getCars()
        cars = cars.filter(item=>{
            if(item.id === goods.id){
                return false
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)  
        ctx.commit("changeCars",cars)
    },

}


//通过localStorage模拟后端
function getCars(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}