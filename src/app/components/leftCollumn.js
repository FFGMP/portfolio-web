"use client";
import { useEffect, useState } from "react";
import { setThemeCookie } from "./cookiesManager";

const CardForAbouts = ({ SVG, Title, SubTitle }) => (
  <div className="grid grid-flow-col gap-x-4 justify-center items-center mb-3 xl:mb-7 max-w-[212.85px]">
    <div className="shadow-md shadow-neutral-800 row-span-2 p-2 rounded-md bg-gradient-to-l from-neutral-900 to-neutral-950">
      {SVG}
    </div>
    <div className="col-span-5">{Title}</div>
    <div className="col-span-5 min-w-[150.85px] block">{SubTitle}</div>
  </div>
);

export function LeftCollumn() {
  const [isShowMoreClicked, setShowMoreClicked] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") != null
      ? localStorage.getItem("theme")
      : "dark"
  );

  const handleShowMore = () => {
    setShowMoreClicked(!isShowMoreClicked);
  };

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      const html = document.querySelector("html");

      html.classList.remove("dark", "light");
      html.classList.add(localStorage.getItem("theme") || theme);
      setThemeCookie(theme);
    }
  }, [theme]);

  return (
    <div
      id="LeftOne"
      className={`transition-all duration-500 xl:duration-0 ease-out w-full sm:w-[39rem] lg:w-[62rem] xl:w-[23%] 
        xl:max-h-max ${
          isShowMoreClicked ? "h-[482px]" : "h-[178px]"
        } xl:h-full sm:mt-10 xl:sticky rounded-md bg-neutral-900 border-[1px] border-neutral-700`}
    >
      <div
        className={`relative items-center justify-start flex p-5 xl:flex-col xl:justify-center xl:items-center ${
          isShowMoreClicked ? "" : ""
        }`}
      >
        <div
          onClick={handleShowMore}
          className="xl:hidden absolute top-0 right-0 p-2 border-l border-b rounded-bl-lg bg-neutral-800 shadow-md shadow-neutral-700 cursor-pointer"
        >
          <button>
            <p className="text-sm">Show more</p>
          </button>
        </div>
        <div className="xl:mt-14 bg-neutral-700 p-7 rounded-lg">
          <svg
            className=""
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
          </svg>
        </div>
        <div className="ml-5 xl:ml-0">
          <h1 className="text-center text-3xl xl:mt-4 xl:text-xl">FFGMP</h1>
          <div className="xl:mt-2 xl:max-w-fit bg-neutral-800 px-4 py-1 rounded-lg">
            <p className="text-xs sm:text-sm">Programmer</p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-start xl:items-center ml-5 xl:ml-0 ${
          isShowMoreClicked ? "" : "max-xl:hidden visible"
        }`}
      >
        <hr className="w-8/12 mt-4 xl:mt-0 mb-6 opacity-20 mx-auto" />

        <CardForAbouts
          SVG={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>
          }
          Title={<p className="text-xs">EMAIL</p>}
          SubTitle={
            <a
              className="hover:underline hover:text-blue-300 visited:text-purple-300"
              href="mailto:ffgmp@hotmail.com"
            >
              <p className="text-sm">ffgmp@hotmail.com</p>
            </a>
          }
        />

        <CardForAbouts
          SVG={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          }
          Title={<p className="text-xs">LINKEDIN</p>}
          SubTitle={
            <a
              className="hover:underline hover:text-blue-300 visited:text-purple-300"
              href="https://linkedin.com/ffgmp"
            >
              <p className="text-sm">linkedin.com/ffgmp</p>
            </a>
          }
        />

        <CardForAbouts
          SVG={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          }
          Title={<p className="text-xs">GITHUB</p>}
          SubTitle={
            <a
              className="hover:underline hover:text-blue-300 visited:text-purple-300"
              href="https://github.com/FFGMP"
            >
              <p className="text-sm">github.com/FFGMP/</p>
            </a>
          }
        />

        <hr className="w-8/12 mt-4 xl:mt-0 mb-4 opacity-20 mx-auto" />

        <div className="flex self-center mb-4">
          <button
            name="ToggleTheme"
            title="Toggle theme"
            type="button"
            onClick={handleTheme}
            className="bg-neutral-800 p-2 rounded-md shadow-sm shadow-neutral-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm-4.184-.599l-3.593-3.594-1.415 1.414 3.595 3.595c.401-.537.876-1.013 1.413-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.595-3.595-1.414-1.414-3.595 3.595c.537.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.593c-.403.536-.879 1.012-1.415 1.414zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftCollumn;
