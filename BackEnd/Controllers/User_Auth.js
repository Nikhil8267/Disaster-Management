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
        res.status(200).json({
			_id: User.userId,
			username: User.name,
			email: User.email,
		});
    } 
    catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { password, email} = req.body;
        const existUser = await User.findOne(email);

        if(!existUser) {
            return res.status(400).json({ error: "Email not exist..." });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!isPasswordCorrect){
            return res.status(400).json({ error: "Wrong password..." });
        }

        res.status(200).json({
			_id: User.userId,
			username: User.name,
			email: User.email,
		});
    } 
    catch (error) {
        
    }
}