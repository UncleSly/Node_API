import { console } from "node:inspector/promises"
import Product from "../models/product.model.js"

const createProducts = async(req, res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({"message": message.error})
    }
}

const getProducts = async(req, res)=>{
      try {
        const product = await Product.find()
        res.status(200).json(product)
      } catch (error) {
        res.status(500).json({"message": message.error})
      }
}

const getAproduct = async(req, res)=>{
    try {
        const {id} = req.params
      const product =  await Product.findById(id)
      if(product){
        res.status(200).json(product) 
      }else{
        return res.status(404).json({"message": "Product not found"})
      }
      
    } catch (error) {
        res.status(500).json({"message": console.error})
    }
}

export {
    createProducts,
    getProducts,
    getAproduct
}