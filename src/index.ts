import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import { UserController } from './controllers/UserController'
import { DialogController } from './controllers/DialogController'
import { MessagesController } from './controllers/MessagesController'


const app = express();
app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessagesController();

mongoose.connect("mongodb://localhost:27017/chat", { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.get('/user/:id', User.index);
app.post('/user/registration', User.create);
app.delete('/user/delete/:id', User.delete);


app.get('/dialogs/:id', Dialog.index)
app.post('/dialogs', Dialog.create)
app.delete('/dialogs/:id', Dialog.delete)


app.get('/messages', Messages.index)
app.post('/messages', Messages.create)


app.listen(3000, function() {
    console.log('We are listening 3000 port')
})