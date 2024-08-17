import express from "express"
import todoRouter from "./routes/todo.router.js"
import exphbs from "express-handlebars"
import "./database.js";


const app = express()
const PUERTO = 8080

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./src/public"))

//Express-handlebars
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
app.set("views","./src/views")

//Rutas
app.use("/", todoRouter)


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`)
})