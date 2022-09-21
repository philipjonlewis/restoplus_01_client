import React from 'react';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  WebsiteIcon,
} from './branding/SvgIcons';

const ProjectInformationDisplay = () => {
  return (
    <div className="absolute w-fit left-4 top-4  flex-col ">
      <div className="mb-4">
        <p className="text-2xl font-bold font-serif mb-2">
          Restoplus Challenge - 01
        </p>
        <p className="text-xs mb-4 pb-2  border-b-[1px] border-white w-fit">
          Philip Jon E. Lewis
        </p>

        <div className="flex gap-4  w-fit pb-4">
          <a target="_blank" href="https://philipjonlewis.com">
            <WebsiteIcon />
          </a>
          <a target="_blank" href="https://github.com/philipjonlewis">
            <GitHubIcon />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/philipjonlewis/">
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://twitter.com/__jonlewis">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold pb-4">Challenge 01 Criteria</p>
        <ul className="text-sm flex flex-col gap-4 border-b-[1px] w-fit mb-4 pb-4">
          <li>
            - Create a counter with Increment/Decrement buttons <br />
            and store the current count in the MongoDB
          </li>
          <li>
            - Retrieve the current value upon refresh, such that the <br />{' '}
            counter would start from the previous value.
          </li>
          <li>
            - Create a reset button, which will reset <br /> the counter in the
            database to zero.
          </li>
          <li>
            - The database communication should only <br /> happen from the
            server side.
          </li>
        </ul>
      </div>
      <div className="flex my-4 justify-start items-center hover:bg-blue-700 bg-blue-500 w-fit p-2 py-4 rounded-lg">
        <GitHubIcon />{' '}
        <a
          className="pl-2 cursor-pointer"
          target="_blank"
          href="https://github.com/philipjonlewis/restoplus_01"
        >
          Project Repo
        </a>
      </div>
      <div className="w-fit">
        <p className="text-xl font-bold">Tech Stack</p>
        <div className="pl-2">
          <p className="text-sm font-bold mb-1">Front End</p>
          <div className="pl-2 text-xs">
            <p>Typescript</p>
            <p>Vite</p>
            <p>React</p>
            <p>Tailwind</p>
          </div>
        </div>
        <div className="pl-2 mt-2">
          <p className="text-sm font-bold mb-1">Back End</p>
          <div className="pl-2 text-xs">
            <p>Typescript</p>
            <p>Node + Express</p>
            <p>MongoDB + Mongoose</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformationDisplay;
