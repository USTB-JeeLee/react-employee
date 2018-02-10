const express = require('express')
const mongoose = require('mongoose')

// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo secuess')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))
// 新增数据
User.create({
    user: 'lijin01',
    age:21
}, function(err, doc) {
    if(!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

User.update({'user': 'lijin01'}, {'$set': {age:22},function(err, doc){
    console.log(doc)
}})

// 新建app
User.remove({age: 20}, function(err, doc){
    console.log(doc)
})

const app = express()

app.get('/', function(req,res) {
    res.send('<h1>hello world</h1>')
})

app.get('/data', function(req,res) {
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
    // res.json({name: 'imoo2323c', type: 'IT'})
})

app.listen(9000, function(){
    console.log('listening')
})