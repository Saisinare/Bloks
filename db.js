const mongoose = require('mongoose')
const connect = async ()=>{
    try{
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/blogs')
    if(connection){
        console.log('db connected successFully ')
    }
    else{
        console.log('some err occur')
    }
    }catch(err){
        console.log(err)
    }
}
module.exports = connect
