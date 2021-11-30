class Buyer{
    constructor(buyer_id, remove, buy_secondname, buy_firstname, buy_middlename, card){
        this.buyer_id = buyer_id;
        this.remove = remove;
        this.buy_secondname = buy_secondname;
        this.buy_firstname = buy_firstname;
        this.buy_middlename = buy_middlename;
        this.card = card;
    }
}
module.exports = Buyer;