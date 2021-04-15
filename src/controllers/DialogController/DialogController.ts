import express from 'express'
import { DialogModel } from '../../schemas'

export default class DialogController {
    index(req: express.Request, res: express.Response) {
        const authorId: string = req.params.id;
        DialogModel.find({author: authorId})
        .populate(['author', 'partner'])
        .exec(function (err: any, dialogs: any) {
            if (err)  { 
                return res.status(404).json({
                message: "Dialogs not found"
            })
          }  return res.json(dialogs)
            
        })
    };
    create(req: express.Request, res: express.Response) {
        const postdata = {
            author: req.body.author,
            partner: req.body.partner
        }
        const dialog = new DialogModel(postdata);
        dialog.save().then((obj: any) => {
            res.json(obj)
        })
        .catch((reason: any) => res.json(reason))
    }
    delete(req: express.Request, res: express.Response) {
        const id = req.params.id
        DialogModel.findOneAndRemove({_id: id})
        .then((dialog: any) => {
            if (dialog) {
                res.json({
                    message: "Dialog deleted"
                })
            }
        })
        .catch(() => { res.json({message: "Dialog not found"})})
    }
}