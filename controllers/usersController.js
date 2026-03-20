

const { sortingValuesUsingParams ,readingDataFromFile} = require("../services/userService")

let getUsers = (req, res) => {
    
    // read data from json file
    let users;
    users = readingDataFromFile()
    
    
    // filter  users by age if query parameter is present
    users = sortingValuesUsingParams(req.query,users)
   res.send(users)
}



module.exports= {getUsers}