import Menu from "../menu";
import FilterManager from "./filterManager";


export function Portfolio_RightCollumn() {
    return (
        <div className="relative">
            <h1 className="text-3xl pl-8 pt-6 pb-5">Portfolio</h1>
            <Menu />
            <hr className="w-40 h-2 mx-8 bg-current border-0 rounded-md" />
            <FilterManager />

        </div >
    )
}

export default Portfolio_RightCollumn