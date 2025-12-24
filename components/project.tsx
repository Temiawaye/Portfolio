"use client"
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCoreldraw } from "react-icons/si";

export default function Projects() {

    return(
        <div className="flex flex-col items-center w-full  py-28 px-5 gap-3">
            <p className="font-bold text-3xl">Projects</p>
            <p>By using Applications Such as</p>
            <div className="flex flex-row gap-5">
                <SiAdobephotoshop className="size-12 text-blue-800 " color="blue" />
                <SiAdobeillustrator className="size-12" />
                <SiCoreldraw className="size-12" />
            </div>
            <p>we have designed multiple graphics</p>
        </div>
    )
}