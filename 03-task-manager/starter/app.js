const express = require('express');
const tasks = require('./routes/task');


const app = express();

// middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)




const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`))
