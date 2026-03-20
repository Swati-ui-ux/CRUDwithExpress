const express = require('express');
const app = express()
const PORT = 5000

const studentsRoute = require("./router/students")
const homeRoute = require("./router/home")
const coursesRoute = require("./router/courses")
app.use("/students", studentsRoute)
app.use("/courses", coursesRoute)
app.use("/", homeRoute)




app.use((req,res) => {
res.send("<h1>404 page not found</h1>")
})



app.listen(PORT, () => {
console.log(`Server is running ${PORT}`)
})