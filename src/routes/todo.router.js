import { Router } from "express" 

const router = Router()


// function identificarUsuario(req, res, next) {
//     //cuerpo de la funcion

//     next()// sino colocas el next da error, es para qeu pase a la siguiente middleware o ya avanzar al servidor
// }

// router.get('/usuario-privado', identificarUsuario, (req,res) => {
    
// })

router.get("/", (req,res) => {
    res.send("holis, estamos en backend 2")
})

export default router