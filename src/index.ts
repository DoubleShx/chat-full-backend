import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import { UserModel } from './schemas/User'
import { UserController } from './controllers/UserController'


const app = express();
app.use(bodyParser.json());

const User = new UserController();

mongoose.connect("mongodb://localhost:27017/chat", { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.get('/user/:id', User.index);
app.post('/user/registration', User.create);
app.delete('/user/delete/:id', User.delete);

// app.post("/create", function(req: express.Request, res: express.Response) {
//     const postData = {
//         email: req.body.email,
//         fullName: req.body.fullName,
//         password: req.body.password
//     };
//     const user = new UserModel(postData);
//     user.save().then((obj: any) => {
//         console.log('req')
//         res.json(obj)})
//         .catch((reason: any) => { 
//             console.log('res')
//         res.json(reason)})
// });


app.listen(3000, function() {
    console.log('We are listening 3000 port')
})