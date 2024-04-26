const Cliente  = require('../models/Cliente');//llamamos el modelo

//Funcion agregar cliente
exports.agregarCliente = async(req,res)=>{

    try {

        let cliente;
        cliente = new Cliente(req.body);
        await cliente.save();
        res.send(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

//Función buscar clientes
exports.consultarClientes = async(req,res)=>{
    try {

        let cliente;
        clientes = await Cliente.find();
        res.json(clientes)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al consultar cliente');
    }
}

exports.consultarCliente = async(req,res)=>{
    try {

        let cliente;
        cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({msg:'cliente no encontrado por el id consultado'})
        }
        res.json(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al consultar cliente');
    }
}

exports.eliminarCliente = async(req,res)=>{
    try {

        let cliente;
        cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({msg:'cliente no existe'})
            return;
        }
        //await Cliente.findOneAndRemove({_id:req.params.id});
        await Cliente.findOneAndDelete({_id:req.params.id});
        res.json({msg:'El cliente fue elimnado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar cliente');
    }
}

exports.actualizarCliente = async(req,res)=>{
    try {
        const {nombres,apellidos,documento,correo,telefono,direccion} = req.body;//asginamos los campos a actualizar del cuerpo de la petición
        let cliente;
        cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({msg:'cliente no existe'});
            return;
        }else{
            
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;
            cliente = await Cliente.findOneAndUpdate({_id:req.params.id},cliente,{new:true});//se actualiza el parametro
            //res.json({msg:'El cliente fue actualizado correctamente'});
            res.json(cliente);
            
        }
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar cliente');
    }
}

exports.modificarCliente = async(req,res)=>{
    try {

        let cliente;
        cliente = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!cliente) {
            res.status(404).json({msg:'cliente no existe'});
            return;
        }else{
            res.json(cliente);
            
        }
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar cliente');
    }
}