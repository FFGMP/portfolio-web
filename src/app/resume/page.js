import Menu from "../components/Menu/menu";

const SectionTimelineListEducation = ({ data }) => (
    <ul>
        {data.map((item, index) => (
            <li key={index} id={index}>
                <div className={`relative after:absolute after:left-[1.55rem] sm:after:left-[3.71rem] after:top-3 after:rounded-lg after:ring-1 after:h-2 after:w-2 after:ring-current ${index !== data.length - 1 ? "before:w-0.5 before:rounded-md before:bg-neutral-700 before:absolute before:last:h-[calc(100%+67px)] before:-top-3 before:ml-7 sm:before:ml-[3.9rem]" : ""}`}>
                    <div className='ml-12 sm:ml-[6.1rem] pr-4 sm:pr-20'>
                        <h1 className='text-xl'>{item.Title}</h1>
                        <p className='text-base'>{item.Date}</p>
                        <p className='text-sm mb-11 text-justify'>{item.Text}</p>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

const dataForSectionListEducation = [
    { Title: "Full Stack Web Development Bootcamp - XYZ Coding School", Date: "2020 - 2021", Text: "Developed a variety of web applications using React, Node.js, and MongoDB." },
    { Title: "Data Science and Machine Learning Course - ABC University", Date: "2018 - 2019", Text: "Explored various machine learning algorithms and techniques, and applied them to real-world datasets." },
    { Title: "Mobile App Development Course - DEF Institute", Date: "2017 - 2018", Text: "Designed and developed several mobile apps for iOS and Android platforms using Swift and Java." }
];

const SectionTimelineListExperience = ({ data }) => (
    <ul>
        {data.map((item, index) => (
            <li key={index} id={index}>
                <div className={`relative after:absolute after:left-[1.55rem] sm:after:left-[3.71rem] after:top-3 after:rounded-lg after:ring-1 after:h-2 after:w-2 after:ring-current ${index !== data.length - 1 ? "before:w-0.5 before:rounded-md before:bg-neutral-700 before:absolute before:last:h-[calc(100%+67px)] before:-top-3 before:ml-7 sm:before:ml-[3.9rem]" : ""}`}>
                    <div className='ml-12 sm:ml-[6.1rem] pr-4 sm:pr-20'>
                        <h1 className='text-xl'>{item.Title}</h1>
                        <p className='text-base'>{item.Date}</p>
                        <p className='text-sm mb-11 text-justify'>{item.Text}</p>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

const dataForSectionListExperience = [
    { Title: "Full Stack Web Developer - ABC Company", Date: "2020 - Present", Text: "Developed a variety of web applications using React, Node.js, and MongoDB." },
    { Title: "Data Scientist - DEF Company", Date: "2019 - 2020", Text: "Explored various machine learning algorithms and techniques, and applied them to real-world datasets." },
    { Title: "Mobile App Developer - GHI Company", Date: "2018 - 2019", Text: "Designed and developed several mobile apps for iOS and Android platforms using Swift and Java." }

];

const SkillsDiv = ({ data }) => (
    data.map((item, index) => (
        <div className={`flex mx-auto px-4 py-1 w-11/12 flex-col border-x-2 border-neutral-700 ${index !== data.length - 1 ? "" : "border-b-2 mb-8 rounded-b-md"} ${index === 0 ? "pt-3 border-t-2 rounded-t-md" : ""}`}>
            <p className="font-bold">{item.Title} <span className='font-extralight'>{item.Percentage + "%"}</span></p>
            <div className="mt-3 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div style={{ width: `${item.Percentage}%` }} className="bg-current h-2.5 rounded-full dark:bg-current"></div>
            </div>
        </div>
    ))
);


const dataForSkilsSection = [
    { Title: "HTML", Percentage: "20" },
    { Title: "CSS", Percentage: "70" },
    { Title: "JavaScript", Percentage: "80" },
    { Title: "React", Percentage: "65" },
    { Title: "Node.js", Percentage: "90" },
];



export function Resume_RightCollumn() {

    return (
        <div className="relative">
            <h1 className="text-3xl pl-8 pt-6 pb-5">Resume</h1>
            <Menu />
            <hr className="w-40 h-2 mx-8 bg-current border-0 rounded-md" />

            <div className='flex flex-row ml-2 sm:ml-10 mt-6 items-center flex-wrap mb-3'>
                <div className="p-2 rounded-md bg-gradient-to-l from-neutral-900 to-neutral-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' width="30" height="30" viewBox="0 0 24 24"><path d="M20 16.78c.002-1.8.003-2.812 0-4.027-.001-.417.284-.638.567-.638.246 0 .49.168.538.52.19 1.412.411 2.816.547 3.146.042.099.113.141.185.141.123 0 .244-.123.206-.284-.255-1.069-.493-2.519-.607-3.334 1.904 1.854 2.314 2.005 2.192 3.548-.089 1.129-.52 2.508.373 4.255l-2.563.893c-.062-.314-.138-.637-.226-.933-.515-1.721-1.214-1.752-1.212-3.287zm-16.567-4.665c-.246 0-.49.168-.538.52-.19 1.412-.411 2.816-.547 3.146-.042.099-.113.141-.185.141-.123 0-.244-.123-.206-.284.255-1.069.493-2.519.607-3.334-1.904 1.854-2.314 2.005-2.192 3.548.09 1.128.521 2.507-.372 4.254l2.562.894c.062-.314.138-.637.226-.933.515-1.721 1.214-1.752 1.212-3.287-.002-1.8-.003-2.812 0-4.027.001-.418-.285-.638-.567-.638zm1.567.642zm14.001 2.637c-2.354.194-4.35.62-6.001 1.245v-9.876l.057-.036c1.311-.816 3.343-1.361 5.943-1.603v7.633c-.002-.459.165-.881.469-1.186.377-.378.947-.562 1.531-.391v-8.18c-3.438.105-6.796.658-9 2.03-2.204-1.372-5.562-1.925-9-2.03v8.18c.583-.17 1.153.012 1.531.391.304.305.471.726.469 1.184v-7.631c2.6.242 4.632.788 5.943 1.604l.057.035v9.876c-1.651-.626-3.645-1.052-6-1.246v1.385c0 .234-.021.431-.046.622 2.249.193 4.372.615 6.046 1.381.638.292 1.362.291 2 0 1.675-.766 3.798-1.188 6.046-1.381-.025-.191-.046-.386-.046-.621l.001-1.385zm-12.001-2.426c1.088.299 2.122.64 3 .968v1.064c-.823-.345-1.879-.705-3-1.015v-1.017zm0-1.014c1.121.31 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968v1.017zm0-5.09v1.017c1.121.311 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968zm0 3.058c1.121.31 2.177.67 3 1.015v-1.063c-.878-.328-1.912-.669-3-.968v1.016zm10 4.063c-1.121.31-2.177.67-3 1.015v-1.064c.878-.328 1.912-.669 3-.968v1.017zm0-3.048c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017zm-3-3.105v1.064c.823-.345 1.879-.705 3-1.015v-1.017c-1.088.299-2.122.64-3 .968zm3 1.074c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017z" /></svg>
                </div>
                <div>
                    <h1 className="text-2xl ml-2 justify-self-stretch">Education</h1>
                </div>
            </div>

            <SectionTimelineListEducation data={dataForSectionListEducation} />

            <div className='flex flex-row ml-2 sm:ml-10 mt-6 items-center flex-wrap mb-3'>
                <div className="p-2 rounded-md bg-gradient-to-l from-neutral-900 to-neutral-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="30" height="30" viewBox="0 0 24 24"><path d="M0 3v15h17v-15h-17zm15 13h-13v-11h13v11zm-4.5 3l1.599 2h-7.198l1.599-2h4zm8.5 2h5v-13h-5v13zm3.1-3.5c0 .332-.269.6-.6.6s-.6-.269-.6-.6.269-.6.6-.6.6.268.6.6zm-.1-7.5v5h-1v-5h1z" /></svg>                </div>
                <div>
                    <h1 className="text-2xl ml-2 justify-self-stretch">Experience</h1>
                </div>
            </div>

            <SectionTimelineListExperience data={dataForSectionListExperience} />

            <h1 className='text-2xl mb-6 ml-5 sm:ml-10'>My Skills</h1>

            <SkillsDiv data={dataForSkilsSection} />

        </div >
    )

}

export default Resume_RightCollumn