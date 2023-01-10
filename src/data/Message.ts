import { AppUser } from "./AppUser"

export interface Message {
    id?: number
    title?: string
    body: string
    author: AppUser
    created_date: Date
    updated_date: Date
    views?: number
    comments?: Message[]
    post?: Message
    recipient?: AppUser
}