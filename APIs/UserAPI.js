import exp from 'express'
export const usersApp=exp.Router();
let users=[]

//Create API(REST API -Representational State Transfer)
   //Route to handle GET req of Client(http://localhost:3000/users)

   usersApp.get('/users',(req,res)=>{
    res.json({message:"all users",payload:users})
   })

   //Route to handle POST req of Client
   usersApp.post('/users',(req,res)=>{

    const newUser=req.body
    users.push(newUser)
    res.json({message:"user created."})
   })

   //Route to handle PUT req of Client
   usersApp.put('/users',(req,res)=>{
    
      //get modified user from client
      let modifiedUser=req.body
      //get index of existing user in users array
      let index=users.find(userObj=>userObj.id===modifiedUser.id)
      //user not found
      if(index){
         return res.json({message:"user not found"})
      }
      //update user with index
      users.splice(index,1,modifiedUser)
      //send res
      res.json({message:"User updated."})

   })

   //Route to handle DELETE req of Client
   usersApp.delete('/users/:id',(req,res)=>{

      //get id of user from url parameter
      let idOfUrl=Number(req.params.id)
      //find index of user
      let index=users.findIndex(userObj=>userObj.id===idOfUrl)
      //if user not found
      if(index===-1){
         return res.json({message:"user not found"})
      }
      //delete user by index
      users.splice(index,1)

    res.json({message:"user deleted"})
   })
//route to handle user by id
usersApp.get('/users/:id',(req,res)=>{
    //get user if from url param
    let idOfUrl=Number(req.params.id)
    //find user
    let user=users.find(userObj=>userObj.id===idOfUrl)
    ///if user not found
    if(user===undefined){
      return res.json({message:"user not found"})
    }
    //send res
    res.json({message:"a user",payload:user})

   })
   