'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const GSAPComponent = () => {

    const contactRef = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: contactRef.current,
                markers: true,
                start: "top top",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            }
        })

        tl.from(".heading", {
            opacity: 0,
            x: 100,
            duration: 1,
            stagger: 0.5,
        })
    }, { scope: contactRef })
    return (
        <div
            ref={contactRef}
        >
            <div className="h-32"></div>

            <h1 className="heading">GSAPComponent</h1>
            <h1 className="heading">GSAPComponent</h1>
            <h1 className="heading">GSAPComponent</h1>
            <h1 className="heading">GSAPComponent</h1>
            <h1 className="heading">GSAPComponent</h1>
        </div>
    )
}

export default GSAPComponent