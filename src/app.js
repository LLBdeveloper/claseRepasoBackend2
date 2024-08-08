import express from "express"

const app = express()
const PUERTO = 8080

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./src/public"))

//Rutas
app.get("/", (req, res) => {
    res.send("Estamos en backend2")
})

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`)
})