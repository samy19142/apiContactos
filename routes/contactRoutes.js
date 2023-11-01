const express = require('express');
const router = express.Router();
const db = require('../Connection/mysql_conector');


//*Listar Contactos
router.get('/',(req,res)=>{
    const sql= 'select * from contacts';
    db.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({
                message:err.message
            });
            return;
        }
        res.json(result);
    });
});


//*: Crear Contactos
router.post('/',(req,res)=>{
    const {name,phone,email} = req.body;
    const sql = 'insert into contacts (name,phone,email) values (?,?,?)';
    
    db.query(sql,[name,phone,email], (err,result)=>{
        if(err){
            res.status(400).json({
                message:err.message
            });
            return;
        }
        res.status(201).json({
            message:"Contacto creado correctamente"
        });
    })
});

//* Actualizar Contactos

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {name,phone,email} = req.body;
    const sql = 'update contacts set name=?, phone=?, email=? where id=?';

    db.query(sql,[name,phone,email,id],(err,result)=>{
        if(err){
            res.status(500).json({
                message:err.message
            });
            return;
        }
        res.json({
            message:"Contacto Actualizado correctamente"
        });
    })
    
});

//* Eliminar Contacto
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'delete from contacts  where id=?';

    db.query(sql,[id],(err,result)=>{
        if(err){
            res.status(500).json({
                message:err.message
            });
            return;
        }
        res.json({
            message:"Contacto Eliminado correctamente"
        });
    })
    
});


module.exports =router;