const express = require('express')
const router = express.Router()




const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];


router.get("/", (req, res) => {
    let names = students.map(student => student.name)
    console.log(names)
    res.send({
        Students: names.join(
            ", ")
    })
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    let student = students.find(student => student.id == id)
    if (!student) {
        return res.status(404).send("student not found")
    }
    res.send({Student:student.name})
   
})



module.exports = router