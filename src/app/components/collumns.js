import LeftCollumn from "./leftCollumn"
import RightCollumn from "./About/about_rightCollumn"

export function Collumns() {
    return (
        <div className="max-w-screen-xl flex flex-wrap justify-center gap-6 mx-auto p-4">
            <div id="LeftOne" className="md:transition-none transition-width duration-500 md:duration-0 ease-out xl:sticky sm:mt-10 top-14 max-h-max h-full w-full sm:w-3/4 xl:w-[23%] rounded-md bg-neutral-900 border-[1px] border-neutral-700">
                <LeftCollumn />
            </div>
            <div id="RightOne" className="md:transition-none transition-width duration-1000 md:duration-0 ease-out sm:mt-10 max-md:mb-16 w-full sm:w-3/4 rounded-md bg-current bg-neutral-900 border-[1px] border-neutral-700">
                <RightCollumn />
            </div>
        </div>
    )
}

export default Collumns