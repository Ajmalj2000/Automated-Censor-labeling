const express = require('express')
const bodyParser = require("body-parser");
const cors= require('cors')
const connectToDB = require('./database')
const path = require('path');
const expressFileupload = require('express-fileupload');
const session = require('express-session');

const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())
// const uploadPath = path.join(__dirname, 'public', 'video');
// fileupload

app.use('/video', express.static(path.join(__dirname, 'public', 'video')));
app.use(expressFileupload());
app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true
  }));

const port = 3005
connectToDB()

const registerRouter=require('./Registration/register.router')
const adminRouter= require('./Admin/admin.router')
const userRouter=require('./User/user.router')
app.get('/',(req,res)=>{res.send('loaded')})

app.use('/Registration',registerRouter)
app.use('/Admin',adminRouter)
app.use('/User',userRouter)

app.listen(port,()=>{console.log('server is running')})
