import Link from "next/link"

export function Menu() {
    return (
        <div className="text-xs sm:text-base z-10 justify-center max-md:rounded-t-3xl max-md:border-t-2 py-2 max-md:bottom-0 max-md:left-0 max-md:w-full fixed flex md:absolute md:top-0 md:right-0 md:py-3 bg-neutral-800 rounded-bl-lg">
            <div className="p-3 pl-9"><Link href="/"><p>About</p></Link></div>
            <div className="p-3"> <Link href="/resume"><p>Resume</p></Link></div>
            <div className="p-3"><Link href="/portfolio"><p>Portfolio</p></Link></div>
            <div className="p-3 pr-9"><p>Contact</p></div>
        </div>
    )
}

export default Menu