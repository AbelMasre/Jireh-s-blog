import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-3xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
                Jireh's
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-4">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </Footer.Link>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </Footer.Link>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </Footer.Link>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </Footer.Link>
                <Footer.Link
                  href="https://jirehtech.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Jireh-Tech"
            year={new Date().getFullYear()}
          />
          <div className=" flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
