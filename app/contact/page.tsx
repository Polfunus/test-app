
import React, { Suspense } from 'react'
import ChatForm, { ChatFormSkeleton } from '@/components/ChatForm'
import GSAPComponent from "@/components/GSAPComponent"



const ContactPage = () => {




    return (
        <div>
            <h1>ContactPage</h1>
            <div>
                <ul>
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                </ul>
            </div>
            <GSAPComponent />
            <Suspense fallback={<ChatFormSkeleton />}>
                <ChatForm />
            </Suspense>
        </div>
    )
}

export default ContactPage