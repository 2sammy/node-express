const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')
const login = async(req, res) => {
    const {username, password} = req.body
    if(!username || !password) {
        throw new CustomAPIError('please provide a name and password', 400)

    }

    const id = new Date().getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET, {expiresIn: '30'})

    res.status(200).json({msg: 'user created', token})

}

const dashboard = async (req, res) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || authHeader.startWith('Bearer') ){
        throw new CustomAPIError('no token provided', 400)
    }
    


    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg : `hello sammy `, secret: `here is your authorised data your luck number is${luckyNumber}`})

}
module.exports = {
    login, 
    dashboard}