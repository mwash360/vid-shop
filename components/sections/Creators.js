import React from "react";

export default function Creators() {
  return (
    <section id="creators" >
      <div>
        <div className="my-10">
          <h2 className="text-5xl font-bold text-gray-90">Creators Tab</h2>
        </div>
        <ol class="relative border-l border-darkBlue mx-6">
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-darkBlue "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
              Flowbite Application UI v2.0.0{" "}
              <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900  ml-3">
                Latest
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              Released on January 13th, 2022
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 ">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-darkBlue"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900">
              Flowbite Figma v1.3.0
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              Released on December 7th, 2021
            </time>
            <p class="text-base font-normal text-gray-500 ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 ">
              Flowbite Library v1.2.2
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              Released on December 2nd, 2021
            </time>
            <p class="text-base font-normal text-gray-500 ">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
