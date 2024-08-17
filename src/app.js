import express from "express"
import "./database.js";
import todoRouter from "./routes/todo.router.js"


const app = express()
const PUERTO = 8080

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./src/public"))

//Rutas
app.use("/", todoRouter)


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`)
})