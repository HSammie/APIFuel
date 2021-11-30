class Order{
    constructor(order_id, amount, end_sum, buyer_id, product_id){
        this.order_id = order_id;
        this.amount = amount;
        this.end_sum = end_sum;
        this.buyer_id = buyer_id;
        this.product_id = product_id;
    }
}
module.exports = Order;