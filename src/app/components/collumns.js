import LeftCollumn from "./leftCollumn"
import RightCollumn from "./rightCollumn"

export function Collumns() {
    return (
        <div className="max-w-screen-xl flex flex-wrap justify-center gap-6 mx-auto p-4">
            <div id="LeftOne" className="sticky mt-10 top-14 max-h-max h-full w-[23%] rounded-md bg-neutral-900 border-[1px] border-neutral-700">
                <LeftCollumn />
            </div>
            <div id="RightOne" className="mt-10 w-3/4 rounded-md bg-current bg-neutral-900 border-[1px] border-neutral-700">
                <RightCollumn />
            </div>
        </div>
    )
}

export default Collumns