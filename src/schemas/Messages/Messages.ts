import mongoose, { Schema } from 'mongoose'

const MessagesSchema = new Schema({
    text: { type: String, require: Boolean },
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", requir: true },
    unread: {
        type: Boolean, 
        default: false}
}, {
    timestamps: true 
})

const MessagesModel = mongoose.model("Messages", MessagesSchema);

export default MessagesModel;

