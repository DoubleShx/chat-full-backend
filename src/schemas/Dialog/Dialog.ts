import mongoose, { Schema } from 'mongoose'
import { IDialog } from '../../environment/Interfaces'


const DialogSchema = new Schema(
    {
    partner: { type: Schema.Types.ObjectId, ref: "User"},
    author: { type: Schema.Types.ObjectId, ref: "User"},
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message"},
    },
    {
    timestamps: true
    }
);

const DialogModel = mongoose.model("Dialog", DialogSchema)

export default DialogModel;