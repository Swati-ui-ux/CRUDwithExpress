const express = require('express')
const router = express.Router()




const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];


router.get("/", (req, res) => {
    let courseName = courses.map(course=>course.name)
    res.send({Courses:courseName.join(", ")})
})


router.get("/:id", (req, res) => {
    // res.send("This is courses page")
    const id = req.params.id
    const course = courses.find(course => course.id == id)
    if(!course) return res.status(404).send("Course not found")
    
    res.send({ Courses: course.name,Description:course.description})
    
})

module.exports = router