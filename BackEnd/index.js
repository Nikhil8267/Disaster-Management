const express = require('express')
const userModel = require("./Database/connectMongoDB")
const app = express()

app.get('/', (req, res) => {
    res.send("hey")
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Nikhil",
        username: "Nikhil",
        email: "abc@gmail.com",
    })

    res.send(createduser)
})

app.listen(4000);