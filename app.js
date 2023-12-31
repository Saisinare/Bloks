const express = require('express')
const app = express()
const path = require('path')
const connect = require('./db')
const routes = require('./routes/auth')
const blogRoutes = require('./routes/blogs')
const cookieparser = require('cookie-parser') 
app.set('view engine','ejs')
app.use(express.static(path.join('public')))
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.use(express.json())
app.use(routes)
app.use(blogRoutes)
app.get('/',(req,res)=>{
    const isLogin = (req.cookies.token)?true:false
    res.render('index',{isLogin:isLogin})
})

app.listen(8000,()=>{
    console.log('server listening ')
    connect()
})