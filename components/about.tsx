"use client"

import { motion } from "framer-motion"
import { easeIn } from "motion"

const container = {
    hidden : {opacity: 0,},
    visible: {opacity: 1, transition: {staggerChildren: 0.5 }}
}

const item = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0, transition: {easeIn} }
}


export default function About() {

    return(
        <motion.div 
        variants={container}
        initial= "hidden"
        animate= "visible"
        className="flex flex-col items-center w-full bg-gray-200 pt-14 pb-24 px-5">
            <motion.p variants={item} className="font-bold text-3xl">About Us</motion.p>
            <motion.p variants={item} className="text-center mt-5 md:px-5 lg:px-28 text-xl text-gray-600 mx-auto">
                We are a creative design and print brand built on the belief that visual identity goes beyond the screen.

                We create designs that not only look good digitally but also translate powerfully into print, helping brands show up consistently and professionally everywhere they are seen.

                Our work combines graphic design, branding, and high-quality printing to deliver complete visual solutions. From brand identities and social media creatives to banners, flyers, merchandise, and campaign materials, we ensure every element reflects clarity, purpose, and attention to detail.

                We work with organizations, businesses, and initiatives that value strong communication and lasting impressions. By blending creativity with strategy, we help our clients build recognizable brands, communicate their message effectively, and maintain visual consistency across both digital and physical platforms.

                At our core, we design with intention, print with precision, and brand with purpose  turning ideas into visuals people can see, feel, and trust.
            </motion.p>
        </motion.div>
    )
}