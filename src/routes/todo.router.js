import { Router } from "express" 
import TodoModel from "../models/todo.model.js"
const router = Router()

//Ruta principal que muestra todos los todos
router.get("/", async (req,res) => {
    try {
        const todos = await TodoModel.find().lean()
        res.render("todos", {todos})
    } catch (error) {
        
    }
})

export default router