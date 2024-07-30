"use strict";
/*
    EXPRESSJS 
    ! TODO CONTROLLER
*/

const Todo = require("../models/todoModel");

module.exports = {
    list:async (req,res) => {
        const data = await Todo.findAndCountAll();

        res.render("todoList", {data} )
    },
    create:async (req,res) => {
        if(req.method == "GET"){
            res.render("todoCreate")
        }else{
            console.log(req.body)
            if(req.body.isDone){
                req.body.isDone=true
            }
            const data = await Todo.create(req.body)

            res.redirect("/view") //* yönlendirme için kullanılan method. route adını yazıyoruz.
        }
    },
    read: async (req,res) => {
        const data = await Todo.findByPk(req.params.todoId)
        //* ilgili veri dataValues olarak geliyor
        res.render("todoRead", {todo: data.dataValues})
    }

}