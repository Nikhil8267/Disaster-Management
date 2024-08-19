const express = require('express')
const connectMongoDB = require("./Database/connectMongoDB")
const { login , signup } = require("./Controllers/User_Auth")
const app = express()

app.get('/', (req, res) => {
    res.send("hey")
})

app.post('/login', login)
app.post('/signup', signup)

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	connectMongoDB();
});