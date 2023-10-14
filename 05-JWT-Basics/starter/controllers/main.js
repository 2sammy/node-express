const { json } = require("express")

const login = async ( req, res) => {
    res.send('fake login /register/signup routes')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()* 100)
    res.status(200), json({msg: `hello sammy`, secret:`here is your luckNumber ${luckyNumber}`})

}
module.exports = {
    login,
    dashboard
}