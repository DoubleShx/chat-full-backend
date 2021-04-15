import { Document, Schema } from 'mongoose'

export interface IUser extends Document {
    email: string,
    fullName: string,
    password: string,
    confirmed?: boolean,
    confirmed_hash?: string,
    avatar?: string,
    last_seen?: Date
}
export interface IDialog extends Document {
    partner: {
        type: Schema.Types.ObjectId;
        ref?: string;
        require: true
    };
    author: {
        type: Schema.Types.ObjectId;
        ref?: string;
        require: true
    };
    lastMessage: {
        type: Schema.Types.ObjectId;
        ref: string;
    }
}
export interface IMessages extends Document {
    text: { 
        type: string;
        require: true
    };
    user: {
        type: string,
        ref: string,
        require: true
    }
    dialog: {
        type: Schema.Types.ObjectId;
        ref: string;
        require: true
    }
    unread: boolean;
}