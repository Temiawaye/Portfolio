"use client"

export default function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center text-center h-screen px-5">
            <p className="text-5xl font-bold mb-4">AWAYE TEMILOLUWA</p>
            <p className="text-xl mb-6 "> I am a Graphics Designer & Visual Artist</p>
            <p className=" text-center mb-10">I bring ideas to life through compelling visuals and thoughtful design. Specializing in <br/> branding, illustration, print design, and visual identity systems.</p>

            <div className="flex gap-4 justify-center">
                <button 
                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    View My Work
                </button>
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                >
                    Get In Touch
                </button>
            </div>
        </div>
    );
}