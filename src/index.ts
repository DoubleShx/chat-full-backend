import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import User from './schemas/User'


const app = express();
app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/chat", { useNewUrlParser: true, useUnifiedTopology: true });

app.post("/", function(req:any, res:any) {
    console.log(req.body)
    // const kitty = new User({email: 'hello@domain.com', fullName: "Test User"})
    // kitty.save().then(() => console.log('User created'))
});


app.listen(3000, function() {
    console.log('We are listening 3000 port')
})