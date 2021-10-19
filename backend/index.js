const express = require('express')
const app = express()
const port = 8080 || process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect("mongodb://y database name:6df1oMi0BMK8zpZh@cluster0-shard-00-00.iczji.mongodb.net:27017,cluster0-shard-00-01.iczji.mongodb.net:27017,cluster0-shard-00-02.iczji.mongodb.net:27017/y database name?ssl=true&replicaSet=atlas-pcxqif-shard-0&authSource=admin&retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('database conected'))
    .catch(err =>{console.log(err)});


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',require('./routes/user.route'))
app.listen(port,()=>{
    console.log('port running on '+port)
})
