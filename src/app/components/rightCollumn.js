export function RightCollumn() {

    return (
        <div className="relative">
            <h1 className="text-3xl pl-8 pt-6 pb-5">About me</h1>
            <div className="flex absolute top-0 right-0 py-3 bg-neutral-800 rounded-bl-lg">
                <div className="p-3 pl-9"><p>About</p></div>
                <div className="p-3"><p>Resume</p></div>
                <div className="p-3"><p>Portfolio</p></div>
                <div className="p-3 pr-9"><p>Contact</p></div>
            </div>
            <hr className="w-48 h-2 mx-8 bg-current border-0 rounded-md"/>


        </div>
    )

}

export default RightCollumn