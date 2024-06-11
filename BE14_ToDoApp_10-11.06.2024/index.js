'use strict'

//npm i express dotenv
// npm i express-async-error  -> async functionlarda hataları yakalıyor
//npm install sequelize sqlite3

const express = require('express')
// const { Sequelize } = require('sequelize')
const app = express()

// üstteki npm i ile bu paketi kurunca bu şekilde çağırıyoruz. bu bizim async-await yapımızdaki tüm hataların errorHandling'ini yapıyor'
require('express-async-error')

require('dotenv').config()
const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'

app.all('/', (req, res)=>{
    res.send('TO DO APP')
})


// app.use('/todo', (req, res)=>{ //! url/todo/allurl -> (true) status code 200
//     res.send('TO DO APP222')
// })

// json to obj - obj to json
app.use(express.json())


// express to database connection
const {Sequelize, DataTypes}=require('sequelize')
const sequelize = new Sequelize('sqlite:./db.sqlite3'); // (RDBMS Adress)

//& create MODEL
// const Todo=sequelize.define('table / modem name', {'model details'})
const Todo=sequelize.define('todos', {
    // id:{
    //     type:DataTypes.BIGINT,
    //     primaryKey: true,   // default false
    //     unique: true,       // default false
    //     autoIncrement: true, // default false
    //     allowNull: false,   // default true
    //     comment:'my comment',
    //     field: 'custom name',
    //     defaultValue: 'default value'
    // },
    title: {
        type:DataTypes.STRING,
        allowNull: false
    },

    description: DataTypes.TEXT,

    priority: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue:0 // -1 low, 0 normal, 1 high
    },
    // creat and update date auto generated    
    // createdDate: {type: DataTypes.DATE},
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})


// sequelize.sync() //! run once (bir kez çalışması yeterli)
//bu kod js kodlarımızı sql kodlarına çeviriyor.

//* sequelize.sync({force:true})   // DROP Tables then CREATE tables (mevcut tabloları silip default'a göre yenisini oluşturur) 
//^ sequelize.sync({alter:true}) // BACKUP DB, then DROP tables then CREATE tables then RECOVER (üstteki işlemi yapıyor ama öncesinde tabloları yedeğe alıyor)

//? bu async bir metod : (onun için then-chatch kullanabiliriz)
sequelize.authenticate()   // connect to db
    .then(()=>console.log('Todo DB has been connected'))
    .catch(()=>console.log('Todo DB has not been connected'))




//&  CRUD operations
const router = express.Router()

// LIST Todos (all)
router.get('/todos', async (req, res)=>{

//    const data = await Todo.findAll(req.body)  // tümünü bul-listele
    const data = await Todo.findAndCountAll(req.body)  // bu üstteki ile aynı ama id'den ayrı olarak sayıya da bakarak getiriyor
    res.status(200).send({
        error:false,
        data:data
    })
})


// CREATE todo
router.post('/todos', async (req, res)=>{

    // console.log(req.body)

    const data = await Todo.create(req.body)
    res.status(201).send({
        error:false,
        data:data
    })
})




// READ todo (with id)
router.get('/todos/:id', async (req, res)=>{
    const data = await Todo.findOne({where:{id:req.params.id}}) 
    // const data = await Todo.findByPk(req.params.id) //--- pk: PrimaryKey -- biz hangi param verirsek onu baz alıyor. burada id 
    res.status(200).send({
        error:false,
        data:data
    })
})



// UPDATE todo
router.put('/todos/:id', async (req, res)=>{

    let data = await Todo.update(req.body, {where:{id:req.params.id}})
    data = await Todo.findByPk(req.params.id)
    res.status(201).send({
        error:false,
        data:data
    })
})



// DELETE todo



app.use(router)


//error control
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode || 500
    res.status(errorStatusCode).send({
        error: true,
        status: false,
        message: err.message,
        // cause: err.cause,
        // stack: err.stack
    })
}
app.use(errorHandler)


app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

