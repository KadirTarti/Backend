'use strict'

/*
    & TODO ROUTER 
*/

//? CRUD operations

const router=require('express').Router()

const todo=require('../controllers/todoController')

// LIST todos (all)
router.get('/todos',  todo.list )
// CREATE todo
router.post('/todos', todo.create)

// READ todo  (with id)
router.get('/todos/:id',todo.get )
// UPDATE todo
router.put('/todos/:id', todo.update)
// DELETE todo
router.delete('/todos/:id', todo.delete)

// app.use(router)


// app.all('/',(req, res)=>{
//     res.send('TODO APP')
// })
/*
app.use('/todo',(req, res)=>{ // TODO + ALL url
    res.send('TODO APP')
})
*/

module.exports=router