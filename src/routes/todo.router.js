import { Router } from "express" 
import TodoModel from "../models/todo.model.js"
const router = Router()

//Ruta principal que muestra todos los todos
router.get("/", async (req,res) => {
    try {
        const todos = await TodoModel.find().lean()
        res.render("todos", {todos})
    } catch (error) {
        res.status(500).send("Error interno")
    }
})

//Ruta para crear un nuevo "todo"
router.post("/todos", async (req, res) => {
    const {title, description} = req.body
    try {
        const nuevoTodo = new TodoModel({title, description})
        await nuevoTodo.save()
        res.redirect("/")
    } catch (error) {
        res.status(500).send("Error en el servidor al intentar enviar un todo")
    }
})

//Ruta para renderizar la vista "new"
router.get("/new", (req, res) => {
    res.render("new")
})

export default router