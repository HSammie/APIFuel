class Product{
    constructor(product_id, remove, pr_name, price, ware_amount, provider_id){
        this.product_id = product_id;
        this.remove = remove;
        this.pr_name = pr_name;
        this.price = price;
        this.ware_amount = ware_amount;
        this.provider_id = provider_id;
    }
}
module.exports = Product;