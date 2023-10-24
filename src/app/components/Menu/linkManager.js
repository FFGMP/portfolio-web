"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LinkManager() {
    const pathname = usePathname();

    return (
        <div className="text-xs sm:text-base z-10 justify-center max-lg:rounded-t-3xl max-lg:border-t-2 py-2 max-lg:bottom-0 max-lg:left-0 max-lg:w-full fixed flex lg:absolute lg:top-0 lg:right-0 lg:py-3 bg-neutral-800 rounded-bl-lg">
            <div className={`p-3 pl-9 ${pathname === '/' ? 'text-neutral-400' : ''}`}  ><Link href="/"><p>About</p></Link></div>
            <div className={`p-3 ${pathname === '/resume' ? 'text-neutral-400' : ''}`}> <Link href="/resume"><p>Resume</p></Link></div>
            <div className={`p-3 ${pathname === '/portfolio' ? 'text-neutral-400' : ''}`}><Link href="/portfolio"><p>Portfolio</p></Link></div>
            <div className={`p-3 pr-9 ${pathname === '/contact' ? 'text-neutral-400' : ''}`}><Link href="/contact"><p>Contact</p></Link></div>
        </div>
    )
}

export default LinkManager;
