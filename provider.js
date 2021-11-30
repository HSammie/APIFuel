class Provider{
    constructor(provider_id, remove, provider_name, phone, address, city_code){
        this.provider_id = provider_id;
        this.remove = remove;
        this.provider_name = provider_name;
        this.phone = phone;
        this.address = address;
        this.city_code = city_code;
    }
}
module.exports = Provider;