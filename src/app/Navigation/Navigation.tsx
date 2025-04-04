"use client"

import Link from "next/link";

const STYLE_EFFECTS_BUTTON = "font-bg-primary hover:text-bg-secondary-hover active:text-bg-primary-active transition-colors"

export default function NavigationSection(){
    async function getResume(){
        try{
            return "opa"
        }   
        catch(e){
            throw new Error("Error: /api/hello - " + e);
        }
    }


    return(
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto py-3 flex flex-col md:flex-row max-2xl:px-2 max-w-7xl justify-between items-center ">
                <div className="flex flex-col items-center">
                    <Link href={"#"} className={`text-3xl font-bold ${STYLE_EFFECTS_BUTTON}`}>
                        <span >Victor Cordeiro</span>
                    </Link>
                </div>
                <div className="hidden md:flex font-medium flex-row space-x-5 text-sm">
                    <Link href={"#about"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>About</span>  
                    </Link>
                    <Link href={"#projects"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Projects</span>
                    </Link>
                    <Link href={"#resume"} onClick={()=>{getResume()}}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Resume</span>
                    </Link>
                </div>
                <div>
                    <button 
                        className={`max-md:hidden font-semibold px-18 border-1 rounded-md border-bg-primary  active:border-bg-primary-active md:px-4 py-1 ${STYLE_EFFECTS_BUTTON}`}
                        >Get in touch
                    </button>
                </div>
            </div>
        </header>
    )
}