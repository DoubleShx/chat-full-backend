import express from 'express'
import { MessagesModel } from '../../schemas'

export default class MessagesController {
    index(req: express.Request, res: express.Response) {
        const dialogId = req.query.dialog;
        MessagesModel.find({dialog: dialogId})
        .populate(['dialog'])
        .exec(function(err: any, messages: any) {
            if (err) {
                res.status(404).json({
                    message: "Dialog Not Found"
                })
            } return res.json(messages)
        })
    }
    create(req: express.Request, res: express.Response) {
        const postData = {
            text: req.body.text,
            dialog: req.body.dialog_id,
            user: req.body.user
        } 
        const message = new MessagesModel(postData);
        message
            .save()
            .then((obj:any) => {
                res.json(obj)
            })
            .catch((reason: any) => res.json(reason))
    }
}