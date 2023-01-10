export interface MessageDTO {
    id?: number
    title?: string
    body: string
    authorId: number | undefined
    created_date: Date
    updated_date: Date
    views?: number
    commentIds?: number[]
    postId?: number
    recipientId?: number
}