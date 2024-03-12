import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
	return (
		<div className="footer">
			<footer className="text-white-content footer footer-center bg-base-200 p-10">
				<div>
					<div className="flex items-center gap-4 text-slate-500">
						<a className="transition-colors duration-[250ms] hover:text-[#eaeaea]" href="https://github.com/mihajlo252" aria-label="Github Link">
							<BsGithub size={30} color={""}/>
						</a>
						<a className="transition-colors duration-[250ms] hover:text-[#eaeaea]" href="https://www.linkedin.com/in/mihajlo-kostic/" aria-label="LinedIn Link">
							<BsLinkedin size={30} color="bg-primary"/>
						</a>
					</div>
				</div>
				<div>
          <p className="font-bold text-slate-500">All rights reserved © Mihajlo Kostić 2023</p>
        </div>
			</footer>
		</div>
	);
};
