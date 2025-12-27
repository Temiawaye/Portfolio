"use client"

import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Mail, Linkedin, Github, Globe } from "lucide-react"
import { easeIn, motion } from "motion/react";

const container = {
  hidden : {opacity: 0,},
  visible: {opacity: 1, transition: {staggerChildren: 0.5 }}
}

const item = {
  hidden: {opacity: 0, y: 100},
  visible: {opacity: 1, y: 0, transition: {easeIn} }
}

export default function Contact() {

    return(
        <motion.div
        variants={container}
        initial= "hidden"
        animate= "visible"
        className="flex flex-col items-center w-full bg-gray-200 pt-14 pb-24 px-5 md:px-16 lg:px-44">
            <motion.p variants={item} className="font-bold text-3xl mb-4">Contact Us</motion.p>
            <motion.p variants={item} className="text-center mb-6">Have a design project in mind? Let's bring your vision to life</motion.p>

            <motion.div
            variants={item} 
            className="bg-white border-0 rounded-xl py-10 px-10 md:px-14 lg:px-28 justify-center w-full flex flex-col">

                <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-8 mb-8">
                    <a 
                        href="mailto:hello@alexrivera.design"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center">
                            <Mail className="text-white" size={24} />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Email</div>
                            <div className="text-gray-600">hello@alexrivera.design</div>
                        </div>
                    </a>

                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center">
                        <Linkedin className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">LinkedIn</div>
                        <div className="text-gray-600">@alexrivera</div>
                      </div>
                    </a>

                    <a 
                      href="https://dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="">
                        <FaWhatsappSquare className="text-green-700" size={46} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">WhatsApp</div>
                        <div className="text-gray-600">@alexrivera</div>
                      </div>
                    </a>

                    <a 
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="">
                        <FaSquareXTwitter className="" size={46} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Behance</div>
                        <div className="text-gray-600">@alexrivera</div>
                      </div>
                    </a>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-900 mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-900 mb-2">Email</label>
                        <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                    />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-900         mb-2">Message</label>
                        <textarea 
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg         focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Tell me about your project..."
                    />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </motion.div>
    )
}