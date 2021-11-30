class Procurement{
    constructor(procurement_id, proc_name, proc_amount, proc_price, provider_id, employee_id){
        this.procurement_id = procurement_id;
        this.proc_name = proc_name;
        this.proc_amount = proc_amount;
        this.proc_price = proc_price;
        this.provider_id = provider_id;
        this.employee_id = employee_id;
    }
}
module.exports = Procurement;