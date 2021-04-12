import { Document } from 'mongoose'

export interface IUser extends Document {
    email: string,
    fullName: string,
    password: string,
    confirmed?: boolean,
    confirmed_hash?: string,
    avatar?: string,
    last_seen?: Date
}