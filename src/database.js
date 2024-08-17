import mongoose, { connect } from 'mongoose'

mongoose.connect("mongodb+srv://berteralautaro:admiadmi@backend2-cruster.i5dwz3i.mongodb.net/todolist?retryWrites=true&w=majority&appName=backend2-Cruster")
    .then( () => console.log("MONGODB conectado"))
    .catch( (error) => console.log(error))