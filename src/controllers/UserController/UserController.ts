import express from 'express'
import { UserModel } from '../../schemas'
import { IUser } from '../../environment/Interfaces'

class UserController {
    index(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findById(id, (err: any, user: any) => {
            if (err) {
                return res.status(404).json({
                    message: "Not found"
                })
            } 
            res.json(user)
        })
    };
    create(req: express.Request, res: express.Response) {
        const postData = {
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName
        }
        const user = new UserModel(postData);
        user.save()
        .then((obj:any) => {
            res.json(obj)
        })
        .catch((reason: any) => {
            res.json(reason)
        })
    };
    delete(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findOneAndRemove({_id: id}).
        then((user: IUser) => {
            res.json({
                message: `User ${user.fullName} deleted`
            })
        })
        .catch(() => {
            res.json({
                message: `User not found`
            })
        })

    }
}

export default UserController;