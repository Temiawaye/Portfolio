"use client"
import { SiAdobephotoshop, SiAdobeillustrator, SiCoreldraw } from 'react-icons/si';
import { ProjectCard } from './projectCard';
import { easeIn, easeOut, motion } from 'motion/react';

const projects = [
  {
    title: 'Brand Identity Design',
    description: 'Complete brand identity system including logo design, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1612810806546-ebbf22b53496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY2NDU3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'Logo Design', 'Identity'],
    link: '#'
  },
  {
    title: 'Event Poster Series',
    description: 'Bold typographic poster designs for a music festival featuring dynamic compositions.',
    image: 'https://images.unsplash.com/photo-1739476478863-42b2b97eb647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjB0eXBvZ3JhcGh5fGVufDF8fHx8MTc2NjUxOTg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Print Design', 'Typography', 'Poster'],
    link: '#'
  },
  {
    title: 'Product Packaging',
    description: 'Premium packaging design for an organic skincare line with eco-friendly materials.',
    image: 'https://images.unsplash.com/photo-1668775589980-58f9f0021ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBwcm9kdWN0fGVufDF8fHx8MTc2NjUxOTg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Packaging', '3D Mockup', 'Product Design'],
    link: '#'
  },
  {
    title: 'Custom Illustrations',
    description: 'Vibrant illustration series created for a children\'s book and educational materials.',
    image: 'https://images.unsplash.com/photo-1744057847940-85b1a5c09229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnR3b3JrJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NDI2OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Illustration', 'Digital Art', 'Character Design'],
    link: '#'
  },
  {
    title: 'Magazine Layout',
    description: 'Editorial design for a lifestyle magazine featuring clean layouts and beautiful typography.',
    image: 'https://images.unsplash.com/photo-1619795845878-27014d545342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGxheW91dCUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NjY1MTk4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Editorial', 'Layout Design', 'Print'],
    link: '#'
  },
  {
    title: 'Business Stationery',
    description: 'Professional business card and stationery set with elegant minimal design.',
    image: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY2NDMzNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'Print', 'Stationery'],
    link: '#'
  }
];

const container = {
    hidden : {opacity: 0,},
    visible: {opacity: 1, transition: {staggerChildren: 0.2 }}
}

const item = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0, transition: { duration: 0.6, easeOut } }
}

export function Work() {
  return (
    <motion.section 
    id="projects"
    variants={container}
    initial= "hidden"
    whileInView= "visible" 
    viewport={{ once: true, amount: 0.1 }}
    className="py-20 px-4 bg-gray-50">
      <motion.div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-16">
            <motion.p variants={item} className="font-bold text-3xl">Projects</motion.p>
            <motion.p variants={item} className="text-xl text-gray-600 mt-5  mx-auto ">
                A showcase of my recent design work across branding, print, and digital media.
            </motion.p>
            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">By using Applications Such as</p>
            <div className="flex flex-row justify-center gap-5">
                <SiAdobephotoshop className="size-12 text-blue-800 " color="blue" />
                <SiAdobeillustrator className="size-12" />
                <SiCoreldraw className="size-12" />
            </motion.div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" >we have designed multiple graphics</p> */}
            <motion.div className="flex flex-col items-center gap-4">
                <motion.p variants={item} className="text-gray-600 text-xl">Designed using industry-standard applications</motion.p>
                <motion.div variants={item} className="flex flex-row justify-center gap-10 items-center">
                    {/* Photoshop - Blue */}
                    <SiAdobephotoshop className="size-16 md:size-20 text-[#31A8FF] hover:text-blue-600 transition-colors duration-300" title="Adobe Photoshop" />
                    {/* Illustrator - Orange */}
                    <SiAdobeillustrator className="size-16 md:size-20 text-[#FF9A00] hover:text-orange-600 transition-colors duration-300" title="Adobe Illustrator" />
                    {/* CorelDraw - Green */}
                    <SiCoreldraw className="size-16 md:size-20 text-[#009B48] hover:text-green-600 transition-colors duration-300" title="CorelDRAW" />
                </motion.div>
            </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>  
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

