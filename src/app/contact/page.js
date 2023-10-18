import LeftCollumn from "../components/leftCollumn";
import RightCollumn from "../components/Contact/contact_RightCollumn";


export function Contact() {
    return (
        <main className="">
            <div className="max-w-screen-xl flex flex-wrap justify-center gap-6 mx-auto p-4">
                <div id="LeftOne" className="md:transition-none transition-width duration-500 md:duration-0 ease-out xl:sticky sm:mt-10 top-14 max-h-max h-full w-full sm:w-3/4 xl:w-[23%] rounded-md bg-neutral-900 border-[1px] border-neutral-700">
                    <LeftCollumn />
                </div>
                <div id="RightOne" className="z-40 md:transition-none transition-width duration-1000 md:duration-0 ease-out sm:mt-10 max-md:mb-16 w-full sm:w-3/4 rounded-md bg-current bg-neutral-900 border-[1px] border-neutral-700">
                    <RightCollumn />
                </div>
            </div>
        </main>
    )
}

export default Contact;