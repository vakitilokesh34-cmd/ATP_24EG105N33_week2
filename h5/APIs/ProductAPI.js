 import exp from 'express'
export const productApp = exp.Router();

 let products=[]
   //read all products
   productApp.get('/products',(req,res)=>{
      res.json({message:"All products",payload:products})
   })

   //create a new product
   productApp.post('/products',(req,res)=>{
      const product=req.body
      products.push(product)
      res.json({message:"product added"})
   })

   //read all product by brand 
   productApp.get('/products/:brand',(req,res)=>{
      let brandOfUrl=req.params.brand

      let product=products.find(productObj=>productObj.brand===brandOfUrl)

      if(product===undefined){
         return res.json({message:"product not found"})
      }

      res.json({message:"By brand",payload:product})
   })

   //update a product
   productApp.put('/products',(req,res)=>{
      let newProduct=req.body

      let index=products.findIndex(productObj=>productObj.id===newProduct.id)

      if(index===-1){
         return res.json({message:"product not found"})
      }

      products.splice(index,1,newProduct)

      res.json({message:"product updated."})
   })

   //delete a product by id
   productApp.delete('/products/:productId',(req,res)=>{
      let idOfUrl=Number(req.params.productId)

      let index=products.findIndex(productObj=>productObj.productId===idOfUrl)

      if (index)
      {
         return res.json({message:"product not found"})
      }

      products.splice(index,1)

      res.json({
         message:"product deleted"
      })
   })