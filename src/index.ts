import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import User from './schemas/User'


const app = express();
app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/chat", { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true 
});

app.post("/create", function(req:any, res:any) {
    const postData = {
        email: req.body.email,
        fullName: req.body.fullName,
        password: req.body.password
    };
    const user = new User(postData);
    user.save().then((obj: any) => {
        console.log('req')
        res.json(obj)})
        .catch((reason: any) => { 
            console.log('res')
        res.json(reason)})
});


app.listen(3000, function() {
    console.log('We are listening 3000 port')
})