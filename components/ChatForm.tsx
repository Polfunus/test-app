import React from 'react'
import { Skeleton } from "./ui/skeleton"

const ChatForm = async () => {


    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await data.json()

    return (
        <div>
            {posts.map((post: { id: number, title: string, body: string }) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatForm


export const ChatFormSkeleton = () => {
    return (
        <div>
            <ul className="flex flex-col gap-2">
                <li>
                    <Skeleton className="w-full h-10" />
                </li>
                <li>
                    <Skeleton className="w-full h-10" />
                </li>
                <li>
                    <Skeleton className="w-full h-10" />
                </li>
            </ul>
        </div>
    )
}
