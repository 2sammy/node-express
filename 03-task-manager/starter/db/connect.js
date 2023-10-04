const mongoose = require('mongoose')


const connnectionString = 'mongodb+srv://samuelmanoah:Say6102@node-express.2rbquvg.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.
    connect(connnectionString, {
        useUnifiedTopology:true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
    })

}
 module.exports = connectDB

