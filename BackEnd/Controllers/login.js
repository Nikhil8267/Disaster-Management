const User = require('../Models/User');
const bcrypt = require('bcryptjs')

const signup = async (req, res) => {
    try {
        const { name, password, email, contactNumber, location} = req.body;
        const existingEmail = await User.findOne(name);
        if(existingEmail) {
            return res.status(400).json({ error: "Email is already taken" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            userId: Date.now(),
			name,
			password: hashedPassword,
			email,
            contactNumber,
            location
		});

    } 
    catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
};