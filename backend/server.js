const app = require('./app')

const dotenv = require('dotenv')
const connect_DB  = require("./config/database")
dotenv.config({path:"backend/config/config.env"})


connect_DB();
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})