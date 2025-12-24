"use client"

export default function Footer() {

    return (

        <div className="w-full bg-gray-900 text-white flex flex-col lg:flex-row lg:justify-between items-center lg:px-20 lg:py-8 p-5 gap-4 bottom-0">
            <p>© 2024 Temi. All rights reserved.</p>
            <div className="flex gap-6">
                <p className="cursor-pointer hover:underline">Privacy Policy</p>
                <p className="cursor-pointer hover:underline">Terms of Service</p>
                <p className="cursor-pointer hover:underline">Contact</p>
            </div>
        </div>
    )
}