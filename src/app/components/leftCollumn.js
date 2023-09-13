const CardForAbouts = ({ SVG, Title, SubTitle }) => (
    <div className="grid grid-flow-col gap-x-4 justify-center items-center mb-7 max-w-[212.85px]">
        <div className="row-span-2 p-2 rounded-md bg-gradient-to-l from-neutral-900 to-neutral-950">
            {SVG}
        </div>
        <div className="col-span-5">{Title}</div>
        <div className="col-span-5 min-w-[150.85px] block">{SubTitle}</div>
    </div>

);

export function LeftCollumn() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-neutral-700 p-7 rounded-lg mt-14">
                <svg className="" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                </svg>
            </div>
            <h1 className="text-xl mt-4">FFGMP</h1>
            <div className="bg-neutral-950 mt-2 max-w-fit px-4 py-0.5 rounded-lg">
                <p className="text-xs">Programador</p>
                {/* Linha hr */}
            </div>
            <hr className="w-8/12 mt-5 opacity-20 mb-5" />

            <CardForAbouts SVG={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>}
                Title={<p className="text-xs">EMAIL</p>}
                SubTitle={<a className="hover:underline hover:text-blue-300 visited:text-purple-300" href="mailto:ffgmp@hotmail.com"><p className="text-sm">ffgmp@hotmail.com</p></a>}
            />
            <CardForAbouts SVG={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                Title={<p className="text-xs">LINKEDIN</p>}
                SubTitle={<a className="hover:underline hover:text-blue-300 visited:text-purple-300" href="https://linkedin.com/ffgmp"><p className="text-sm">linkedin.com/ffgmp</p></a>}
            />

            <CardForAbouts SVG={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>}
                Title={<p className="text-xs">GITHUB</p>}
                SubTitle={<a className="hover:underline hover:text-blue-300 visited:text-purple-300" href="https://github.com/FFGMP"><p className="text-sm">github.com/FFGMP/</p></a>}
            />
        </div >
    )
}

export default LeftCollumn