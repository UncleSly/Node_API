import express from 'express'
import { createProducts, getAproduct, getProducts } from '../controller/product.controller.js'

const routes = express.Router()

routes.post("/", createProducts)
routes.get("/", getProducts)
routes.get("/:id", getAproduct)
// routes.put("/:id", upDateProduct)
// routes.delete("/:id", deleteProduct)

export default routes
