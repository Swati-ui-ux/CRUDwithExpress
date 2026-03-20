let getUsers =(req, res) => {
   
    res.send("<h1>Fetch all users</h1>")
}


let postUser =(req, res) => {
    res.send(" Add a new user.")
}

let getUserWithId = (req, res) => {
    res.send(`Fetch user with id ${req.params.id}`)
    
}
module.exports= {getUsers,postUser,getUserWithId}