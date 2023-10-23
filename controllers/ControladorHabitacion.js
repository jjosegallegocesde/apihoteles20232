export class ControladorHabitacion{

    constructor(){}
    registrarHabitacion(peticion,respuesta){
        try{

            //1. Esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar=peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos":"aca van los datos que se guardaron"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    buscarHabitaciones(peticion,respuesta){
        try{

            //1. INTENTAR BUSCAR LOS DATOS EN BD
            //2. Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":"aca van los datos que se buscaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    buscarHabitacionPorId(peticion,respuesta){
        try{
            //1.Esculcar los parametros de la peticion
            let idHabitacionBuscar=peticion.params.id
            //2. validar el dato que llego
            //3.Intento buscar el dato en BD
            //4. responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":"aca van los datos que se buscaron"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado"+error
            })
        }
    }
    modificarHabitacion(peticion,respuesta){
        try{
            //1.traigo el id a editar de la peticion
            let idHabitacionModificar=peticion.params.id
            let datosHabitacionModificar=peticion.body
            //validar los datos
            //Intentar buscar y modificar en BD
            //responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos":"aca van los datos que se editaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion"+error
            })
        }
    }
    borrarHabitacion(peticion,respuesta){
        try{

            let idHabitacionBorrar=peticion.params.id
            //validar
            //intento borrar la habitacion en BD
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de borrado"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion"+error
            })
        }
    }

}