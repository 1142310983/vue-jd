export default {
    computeTotal(state){
        let cars = state.cars
        let total = {price:0,num:0}
        cars.forEach(item => {
            total.price += item.price*item.num;
            total.num += item.num
        });
        return total
    }
}