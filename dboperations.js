var config = require('./dbconfig');
const sql = require('mssql');

async function getPosts(){
    try{
        let pool = await sql.connect(config);
        let posts = await pool.request().query("SELECT * FROM [Post]");
        return posts.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function getOnePost(postId){
    try{
        let pool = await sql.connect(config);
        let post = await pool.request()
            .input('input_parameter', sql.Int, postId)
            .query("select * from [Post] where post_id = @input_parameter");
        return post.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getCity(){
    try{
        let pool = await sql.connect(config);
        let posts = await pool.request().query("select * from [City]");
        return posts.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneCity(cityId){
    try{
        let pool = await sql.connect(config);
        let city = await pool.request()
            .input('input_parameter', sql.Int, cityId)
            .query("select * from [City] where city_code = @input_parameter");
        return city.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getProviders(){
    try{
        let pool = await sql.connect(config);
        let posts = await pool.request().query("select * from [Provider]");
        return posts.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneProvider(providerId){
    try{
        let pool = await sql.connect(config);
        let provider = await pool.request()
            .input('input_parameter', sql.Int, providerId)
            .query("select * from [Provider] where provider_id = @input_parameter");
        return provider.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function addProvider(Provider){
    try{
        let pool = await sql.connect(config);
        let insertProvider = await pool.request()
            .input('remove', sql.Bit, Provider.remove)
            .input('providername', sql.VarChar, Provider.provider_name)
            .input('phone', sql.VarChar, Provider.phone)
            .input('address', sql.VarChar, Provider.address)
            .input('citycode', sql.VarChar, Provider.city_code)
            .execute('Provider_insert');
        return insertProvider.recordsets;
    }
    catch(e){
        console.log(e);
    }
}

async function getEmployees(){
    try{
        let pool = await sql.connect(config);
        let employees = await pool.request().query("select * from [Employee]");
        return employees.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneEmployee(employeeId){
    try{
        let pool = await sql.connect(config);
        let employee = await pool.request()
            .input('input_parameter', sql.Int, employeeId)
            .query("select * from [Employee] where employee_id = @input_parameter");
        return employee.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function addEmployee(Employee){
    try{
        let pool = await sql.connect(config);
        let insertEmployee = await pool.request()
            .input('remove', sql.Bit, Employee.remove)
            .input('secondname', sql.VarChar, Employee.secondname)
            .input('firstname', sql.VarChar, Employee.firstname)
            .input('middlename', sql.VarChar, Employee.middlename)
            .input('pass_series', sql.Int, Employee.pass_series)
            .input('pass_number', sql.Int, Employee.pass_number)
            .input('login', sql.VarChar, Employee.login)
            .input('password', sql.VarChar, Employee.password)
            .input('post_id', sql.Int, Employee.post_id)
            .execute('Employee_insert');
        return insertEmployee.recordsets;
    }
    catch(e){
        console.log(e);
    }
}

async function getProcurements(){
    try{
        let pool = await sql.connect(config);
        let procurements = await pool.request().query("select * from [Procurement]");
        return procurements.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneProcurement(procurementId){
    try{
        let pool = await sql.connect(config);
        let procurement = await pool.request()
            .input('input_parameter', sql.Int, procurementId)
            .query("select * from [Procurement] where procurement_id = @input_parameter");
        return procurement.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function addProcurement(Procurement){
    try{
        let pool = await sql.connect(config);
        let insertProcurement = await pool.request()
            .input('procname', sql.VarChar, Procurement.proc_name)
            .input('procamount', sql.Int, Procurement.proc_amount)
            .input('procprice', sql.Int, Procurement.proc_price)
            .input('providerid', sql.Int, Procurement.provider_id)
            .input('employeeid',sql.Int, Procurement.employee_id)
            .execute('Procurement_insert');
        return insertProcurement.recordsets;
    }
    catch(e){
        console.log(e);
    }
}

async function getProducts(){
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from [Product]");
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneProduct(productId){
    try{
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, productId)
            .query("select * from [Product] where product_id = @input_parameter");
        return product.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getBuyers(){
    try{
        let pool = await sql.connect(config);
        let buyers = await pool.request().query("select * from [Buyer]");
        return buyers.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneBuyer(buyerId){
    try{
        let pool = await sql.connect(config);
        let buyer = await pool.request()
            .input('input_parameter', sql.Int, buyerId)
            .query("select * from [Buyer] where buyer_id = @input_parameter");
        return buyer.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOrders(){
    try{
        let pool = await sql.connect(config);
        let orders = await pool.request().query("select * from [Order]");
        return orders.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneOrder(orderId){
    try{
        let pool = await sql.connect(config);
        let order = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("select * from [Order] where order_id = @input_parameter");
        return order.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getCheques(){
    try{
        let pool = await sql.connect(config);
        let cheques = await pool.request().query("select * from [Cheque]");
        return cheques.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOneCheque(chequeId){
    try{
        let pool = await sql.connect(config);
        let cheque = await pool.request()
            .input('input_parameter', sql.Int, chequeId)
            .query("select * from [Cheque] where cheque_id = @input_parameter");
        return cheque.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

module.exports ={
    getPosts : getPosts,
    getOnePost : getOnePost,
    getCity : getCity,
    getOneCity : getOneCity,
    getProviders : getProviders,
    getOneProvider : getOneProvider,
    addProvider : addProvider,
    getEmployees : getEmployees,
    getOneEmployee : getOneEmployee,
    addEmployee : addEmployee,
    getProcurements : getProcurements,
    getOneProcurement : getOneProcurement,
    addProcurement : addProcurement,
    getProducts : getProducts,
    getOneProduct : getOneProduct,
    getBuyers : getBuyers,
    getOneBuyer : getOneBuyer,
    getOrders : getOrders,
    getOneOrder : getOneOrder,
    getCheques : getCheques,
    getOneCheque : getOneCheque
}