'use strict'

/*
    & TODO ROUTER 
*/

//? CRUD operations

const router=require('express').Router()

const todo=require('../controllers/todoController')

// // LIST todos (all)
// router.get('/todos',  todo.list )
// // CREATE todo
// router.post('/todos', todo.create)

// // READ todo  (with id)
// router.get('/todos/:id',todo.get )
// // UPDATE todo
// router.put('/todos/:id', todo.update)
// // DELETE todo
// router.delete('/todos/:id', todo.delete)
//^bunları aşağıda daha kıs ayazdık:

router.route('/todos')
    .get(todo.list)
    .post(todo.create)

router.route('/todos/:id')
    .get(todo.get)
    .put(todo.update)
    .patch(todo.update) // patch put ile aynı ama istek gönderilirse çalışmamazlık olmasın diye ekledim
    .delete(todo.delete)

router.route('/todos/pending')
    .get(todo.getPending)

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