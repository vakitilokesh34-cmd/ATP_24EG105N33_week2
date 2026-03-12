//create HTTP server
import express from 'express'
import { usersApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
const app=express()

//use body parser 
app.use(express.json())

function middleware1(req,res,next){
   //send res from middleware
  // res.json({messge:"this res from middleware1"})
  console.log("res from middleware1");

   //forward 
   next();
}
function middleware2(req,res,next){
   //send res from middleware
  // res.json({messge:"this res from middleware1"})
  console.log("res from middleware2");
   next();
   //forward 

}

app.use(middleware1)
app.use(middleware2)
app.use('/user-api',usersApp)

app.use('/product-api',productApp)
//set a port number
const port=3000

//assign port number to HTTP server
app.listen(port,()=>console.log(`server running on port  ${port}...`))
//test data (replace this test data with DB)


