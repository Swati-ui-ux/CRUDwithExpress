

// const { sortingValuesUsingParams ,readingDataFromFile} = require("../services/userService")

const { sendErrorResponse, sendResponse } = require("../utils/response")


const users = [
  { id: 1, name: "Swati" ,email:"swati@example.com"},
  { id: 2, name: "Neha" ,email:"neha@example.com"}
]


let getUsers = (req, res) => {
    return sendResponse(res,users,200)
}

let createUser = (req, res) => {
  try {
      const { name, email } = req.body
    console.log(name,email)
      if (!name || !email) {
          let err = new Error("Name and email are required")
          err.statusCode = 404;
          throw err
    //    return sendErrorResponse(res,{statusCode:404,message:"Name and email are required"})
    }
    users.push({id:users.length+1,name,email})
   return sendResponse(res,{id:users.length+1,name,email},201)
  } catch (error) {
    sendErrorResponse(res,error)
  }
}

let getUserWithId = (req, res) => {
    try {
        const userId = parseInt(req.params.id)
    const user = users.find(u => u.id === userId)
        if (!user) {
            let err = new Error("User not found")
            err.statusCode = 404
            throw err
        // return sendErrorResponse(res,{statusCode:404,message:"User not found"})
    }   
    return sendResponse(res,user,200)
    } catch (error) {
        sendErrorResponse(res,error)
    }

}


module.exports= {getUsers,createUser,getUserWithId}