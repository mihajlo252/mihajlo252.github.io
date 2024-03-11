import React from "react";
import { NavLink } from "react-router-dom";
import NavStyles from "./NavStyles.module.css";

export const Navbar = () => {
	return (
		<div
			className="max-[800px] grid max-h-max w-full grid-cols-[1fr_1fr] items-center overflow-x-hidden bg-base-100 px-32 pt-14 max-[1500px]:px-16 max-[800px]:px-6"
		>
			<h1 className="w-max text-4xl font-bold normal-case text-primary max-[600px]:text-3xl max-[400px]:text-2xl">
				Mihajlo Kostić
			</h1>
			<div className="place-self-end">
				<div className="flex gap-5">
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							`btn hover:bg-transparent hover:text-[#eaeaea] p-0 bg-transparent border-none normal-case text-xl max-[600px]:text-lg ${
								NavStyles.navlink
							} ${isActive ? "text-[#eaeaea]" : " text-slate-400"}`
						}
					>
						About
					</NavLink>
					<NavLink
						to="/projects"
						className={({ isActive, isPending }) =>
							`btn hover:bg-transparent hover:text-[#eaeaea] p-0 bg-transparent border-none normal-case text-xl max-[600px]:text-lg ${
								NavStyles.navlink
							} ${isActive ? "text-[#eaeaea]" : "text-slate-400"}`
						}
					>
						Projects
					</NavLink>
				</div>
			</div>
		</div>
	);
};
