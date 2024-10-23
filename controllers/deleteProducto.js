import { modeloProductos } from "../database/models/modeloProductos.js";

export const deleteProducto= (req, res, next)=>{
const idProducto = req.params.id;
    modeloProductos.deleteOne({id: idProducto})
    .then((data)=>{
        if(data.deletedCount !== 1){
            throw new Error(`No existe ningun producto con el id ${idProducto}`)
        }else{
            res.json({
                message: `Producto con id ${idProducto} eliminado con exito`
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}

