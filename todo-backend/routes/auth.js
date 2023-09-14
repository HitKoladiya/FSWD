const express = require('express')
const User = require('../model/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/fetchUser')

//  creating jwt secret
const JWT_SECRET = 'divyisagoodb@y'

// ROUTE 1 : create a user using POST : "/api/auth/createuser" login required
router.post('/createuser', [
    body('email', 'enter a valid Email').isEmail(),
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('password', 'enter a valid password').isLength({ min: 4, max: 12 })
],
    async (req, res) => {
        //  If there are errors return bad request and the errors
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // check weather the user with this email exist already
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({success, error: 'sorry a user with this email already exists' })
            }

            // add solt and hash password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            // creating auth token
            const authtoken = jwt.sign(data, JWT_SECRET)
            success = true
            res.json({success, authtoken , name:req.body.name })
        }
        // catch error if some external error occured
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    })

// ROUTE 2 : authenticate a user using POST : "/api/auth/login"  No login required
router.post('/login', [
    body('email', 'enter a valid Email').isEmail(),
    body('password', 'password cannot be blank').exists()
],
    async (req, res) => {
        //  If there are errors return bad request and the errors
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        // check weather the user with this email exist 
        try {

            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ success, error: 'please try to login with correct credentials' })
            }
            const pass_compare = await bcrypt.compare(password, user.password)
            if (!pass_compare) {
                return res.status(400).json({ success, error: 'please try to login with correct credentials' })
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            // creating auth token
            const authtoken = jwt.sign(data, JWT_SECRET)
            success = true;
            res.json({ success, authtoken , name:user.name })
        }
        // catch error if some external error occured
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    })

// ROUTE 3 : get logged in user details using POST : "/api/auth/getuser" login required
router.post('/getuser', fetchUser,
    async (req, res) => {
        //  If there are errors return bad request and the errors
        try {
            const userId = req.user.id
            let user = await User.findById(userId).select({
                "-password": "password",
                "-date": "date"
            })
            res.send(user)
        }
        // catch error if some external error occured
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    })

module.exports = router