const CustomAPIError = require('../errors/custom-error')
const login = async(req, res) => {
    const {username, password} = req.body
    if(!username || !password) {
        throw new CustomAPIError('please provide a name and password.')
    }





    console.log(username, password);
    res.send('fake  login/register/signup route')
}

const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg : `hello sammy `, secret: `here is your authorised data your luck number is${luckyNumber}`})

}
module.exports = {
    login, 
    dashboard}