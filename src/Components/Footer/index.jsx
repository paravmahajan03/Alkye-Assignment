import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full px-[19%] sm:px-8">
        <div className="flex space-x-12 py-[9.5%] sm:py-12 sm:space-x-6">
          <a
            href="#"
            className="text-white text-2xl sm:text-2xl-sm size-11 sm:size-6"
          >
            <img src="/assets/icons/facebook.svg" />
          </a>
          <a
            href="#"
            className="text-white text-2xl sm:text-2xl-sm size-11 sm:size-6"
          >
            <img src="/assets/icons/instagram.svg" />
          </a>
          <a
            href="#"
            className="text-white text-2xl sm:text-2xl-sm size-11 sm:size-6"
          >
            <img src="/assets/icons/twitter.svg" />
          </a>
          <a
            href="#"
            className="text-white text-2xl sm:text-2xl-sm size-11 sm:size-6"
          >
            <img src="/assets/icons/twitch.svg" />
          </a>
          <a
            href="#"
            className="text-white text-2xl sm:text-2xl-sm size-11 sm:size-6"
          >
            <img src="/assets/icons/youtube.svg" />
          </a>
        </div>

        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <div className="flex w-full justify-between sm:flex-col">
            <a
              href="#"
              className="w-full block text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Cookie Preferences
            </a>
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Corporate Information
            </a>
          </div>
          <div className="flex w-full justify-between sm:flex-col">
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Cookie Preferences
            </a>
            <a
              href="#"
              className="block w-full text-white text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
            >
              Corporate Information
            </a>
          </div>
        </div>

        <div className="text-2xl sm:text-2xl-sm py-[8%]">
          <p>
            <span
            //  className="text-gray-700"
            >
              &copy;
            </span>{" "}
            Alkye Test
          </p>
        </div>
      </div>
    </footer>
  );
}
