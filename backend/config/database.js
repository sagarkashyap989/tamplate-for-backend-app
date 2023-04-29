const mongoose = require('mongoose')

const connect_DB = () =>{
    
mongoose.connect(process.env.DATABASE).then((data) =>{
    console.log("mongoDB connected with server ");
    // console.log(`mongoDB connected with server : ${data.connection.host}`);
}).catch((err) =>{
    console.log(err, 'this is error')
})
}
module.exports = connect_DB