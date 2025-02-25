import express from "express"
import mongoose from "mongoose"
import route from "./routes/product.routes.js"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use("/api/products", route)



mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("DataBase connected successfully")
    app.listen(PORT, ()=>{
        console.log(`server runing on ${PORT}`)
    })
}).catch(()=>{
    console.log("Failed to connect to the DataBase")
})