const dboperations = require('./dboperations');
var Db = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

router.route('/posts').get((request,response)=>{
    dboperations.getPosts().then(result =>{
        response.json(result[0]);
    })
})

router.route('/posts/:id').get((request,response)=>{
    dboperations.getOnePost(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/city').get((request, response)=>{
    dboperations.getCity().then(result =>{
        response.json(result[0]);
    })
})

router.route('/city/:id').get((request,response)=>{
    dboperations.getOneCity(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/providers').get((request,response)=>{
    dboperations.getProviders().then(result =>{
        response.json(result[0]);
    })
})

router.route('/providers/:id').get((request,response)=>{
    dboperations.getOneProvider(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/providers').post((request,response)=>{
    let provider = {...request.body}
    dboperations.addProvider(provider).then(result=>{
        response.status(201).json(result);
    })
})

router.route('/employees').get((request,response)=>{
    dboperations.getEmployees().then(result =>{
        response.json(result[0]);
    })
})

router.route('/employees/:id').get((request,response)=>{
    dboperations.getOneEmployee(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/employees').post((request,response)=>{
    let employee = request.body
    dboperations.addEmployee(employee).then(result=>{
        response.status(201).json(result);
    })
})

router.route('/procurements').get((request,response)=>{
    dboperations.getProcurements().then(result =>{
        response.json(result[0]);
    })
})

router.route('/procurements/:id').get((request,response)=>{
    dboperations.getOneProcurement(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/procurements').post((request,response)=>{
    let procurement = request.body
    dboperations.addProcurement(procurement).then(result=>{
        response.status(201).json(result);
    })
})

router.route('/products').get((request,response)=>{
    dboperations.getProducts().then(result =>{
        response.json(result[0]);
    })
})

router.route('/products/:id').get((request,response)=>{
    dboperations.getOneProduct(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/buyers').get((request,response)=>{
    dboperations.getBuyers().then(result =>{
        response.json(result[0]);
    })
})

router.route('/buyers/:id').get((request,response)=>{
    dboperations.getOneBuyer(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/orders').get((request,response)=>{
    dboperations.getOrders().then(result =>{
        response.json(result[0]);
    })
})

router.route('/orders/:id').get((request,response)=>{
    dboperations.getOneOrder(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

router.route('/cheques').get((request,response)=>{
    dboperations.getCheques().then(result =>{
        response.json(result[0]);
    })
})

router.route('/cheques/:id').get((request,response)=>{
    dboperations.getOneCheque(request.params.id).then(result=>{
        response.json(result[0]);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Api is running at '+port);

