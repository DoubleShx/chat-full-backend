import mongoose from 'mongoose'
import { Schema } from 'mongoose';
import isEmail  from 'validator'

const UserSchema = new Schema({
    email: {
        type: String, 
        require:'Email adress is required', 
        validate: [isEmail, 'Invalid email'], 
        unique: true
    },
    avatar: String,
    fullName: {type: String, required: true},
    password: {type: String, required: true},
    confirmed: {type: Boolean, default: false},
    confirm_hash: String,
    last_seen: Date,
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)

export default User;