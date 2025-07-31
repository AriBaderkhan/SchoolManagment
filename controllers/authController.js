const { registerUser, loginUser } = require('../models/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    const { username, email, password, confirmPassword, age, address, role } = req.body;

    if (password !== confirmPassword) {
        return  res.status(400).send("Password dosent match ");
    }
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    registerUser(username, email, hashedPassword, age, address, role, (err, respond) => {
        if (err) {
            console.log("DB Error:", err);
            if (err.code === '23505') {
                return res.status(400).send("Email already exists");
            }
            return res.status(500).send('Server Error');
        }
        res.status(200).send("User Registered Successfully");
    })
}

loginController = async (req, res) => {
    const { email, password } = req.body;

    loginUser(email, async (err, respond) => {
        if (err) return res.status(500).send("DB Error");

        if (respond.rows.length === 0) {
            return res.status(400).send("User Not Found");
        }

        const hashedPassword = respond.rows[0].password;
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (!isMatch) return res.status(400).send("Incorrect Password");
        const token = jwt.sign({
            username: respond.rows[0].username,
            email: respond.rows[0].email,
            role: respond.rows[0].role
        },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN })

        res.status(200).json({
            message: 'Logged in Successfully',
            token,
            username: respond.rows[0].username
        })
    })
}

module.exports = { registerController, loginController };