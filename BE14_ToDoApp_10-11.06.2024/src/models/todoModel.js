'use strict'
/*
    EXPRESSJS 
    ! TODO MODEL
*/


//? create MODEL
// const Todo=sequelize.define('table / model name',{'model details'})


const {sequelize,DataTypes}=require('../configs/connectDB')
const Todo=sequelize.define('todos',{

    
    // fieldName:{
    //     type:DataTypes.BIGINT,
    //     primaryKey:true,    // deafult false
    //     unique:true,        // default false
    //     autoIncrement:true, // default false
    //     allowNull:false,    // default true 
    //     comment:'my comment',
    //     field:'custom name',
    //     defaultValue:'default value'
    // }
    
    //id:{}   // id field auto generated
    title:{
        type:DataTypes.STRING,
        allowNull:false

    },
    description: DataTypes.TEXT,  // just type 
    // description:{
    //     type:DataTypes.TEXT,  
    //     },
    priority:{ 
        // type:DataTypes.TINYINT,
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0 // -1: low, 0: Normal, 1 High
    },

    isDone:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        // allowNull:false
    }
    // createdDate & updatedDate auto generated
    // createdDate:{ type:DataTypes.DATE }
    // updateddDate:{ type:DataTypes.DATE }
})

// sequelize.sync() //! run once 
// sequelize.sync({force:true}) // DROP tables then CREATE tables
// sequelize.sync({alter:true}) // BACKUP DB then DROP tables then CREATE tables then RECOVER



module.exports= Todo