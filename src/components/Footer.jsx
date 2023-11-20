import React from "react";
import { BsGithub } from "react-icons/bs";


export const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer footer-center p-10 bg-base-200 text-white-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/mihajlo252" aria-label="Github Link">
              <BsGithub size={30}/>
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold">All rights reserved © Mihajlo Kostić 2023</p>
        </div>
      </footer>
    </div>
  );
};
