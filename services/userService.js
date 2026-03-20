
const fs = require("fs")
const path = require("path")

const readingDataFromFile = () => {
const filePath = path.join(__dirname, "../data/users.json")
    const data = fs.readFileSync(filePath,"utf-8")
    let users = JSON.parse(data)
    return users
}


const sortingValuesUsingParams = (req, users) => {
    let { age } = req
    
    if (age) {
        const ages = parseInt(age);
        users = users.filter(u=>u.age===ages)
    }
    
    if (req.sortBy === "name") 
        {
        users.sort((a,b)=>a.name.localeCompare(b.name))
    }
    return users
}

module.exports = {readingDataFromFile,sortingValuesUsingParams}