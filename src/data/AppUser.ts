import { Message } from "./Message"

export interface AppUser {
    id: number
    username: string
    password: string
    messages: Message[]
}