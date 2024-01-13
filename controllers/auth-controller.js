const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const homeHandler = (req, res) => {
    try {
        res.status(200).send("Welcome baby");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error: Unable to process the request");
    }
};

const regHandler = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        
        // Check if user with the given email already exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ error: "Email already exists", success: false });
        }

        // Create a new user
        const userCreated = await User.create({
             username,
             email, 
             phone, 
             password 
            });

        res.status(200).json({ msg: userCreated,
            token :await userCreated.generateToken(),
        userId:userCreated._id.toString()});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error: Unable to process the request");
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error: Unable to process the request");
    }
};

module.exports = { homeHandler, regHandler , login };
