import mongoose, { connect } from 'mongoose'

mongoose.connect("")
    .then( () => console.log("MONGODB conectado"))
    .catch( (error) => console.log(error))