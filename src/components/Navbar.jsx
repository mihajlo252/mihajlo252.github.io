import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavStyles from "./NavStyles.module.css";
import { BurgerClose } 
  from "react-burger-icons";

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggleMenu = (e) => {
		e.preventDefault();
		setToggleMenu(!toggleMenu);
	};

	return (
		<div
			className={`bg-base-100 w-full max-h-max items-center grid grid-cols-[1fr_1fr] px-32 pt-14 overflow-x-hidden max-[1500px]:px-16 max-[800px]:px-6 ${NavStyles.nav_container}`}
		>
			<h1
				className={`w-max text-4xl font-bold normal-case text-primary max-[600px]:text-3xl max-[400px]:text-2xl`}
			>
				Mihajlo Kostić
			</h1>
			<div className="place-self-end">
				
					<button
						className="btn btn-ghost z-10 place-self-end p-0"
						type="button"
						onClick={handleToggleMenu}
					>
						<BurgerClose isClosed={toggleMenu} />
					</button>
				
				<div
					className={`flex flex-col absolute top-28 translate-x-[-20px] ${NavStyles.menu}`}
					data-toggle={toggleMenu ? "true" : "false"}
				>
					<NavLink
						to="/"
						onClick = {() => {
							setToggleMenu(false);
						}}
						className={({ isActive, isPending }) =>
							`btn hover:bg-transparent hover:text-[#eaeaea] p-0 bg-transparent border-none normal-case text-xl max-[600px]:text-lg ${
								NavStyles.navlink
							} ${isActive ? "text-[#eaeaea]" : " text-slate-400"}`
						}
						disabled={toggleMenu ? false : true}
					>
						About
					</NavLink>
					<NavLink
						to="/projects"
						onClick = {() => {
							setToggleMenu(false);
						}}
						className={({ isActive, isPending }) =>
							`btn hover:bg-transparent hover:text-[#eaeaea] p-0 bg-transparent border-none normal-case text-xl max-[600px]:text-lg ${
								NavStyles.navlink
							} ${isActive ? "text-[#eaeaea]" : "text-slate-400"}`
						}
						disabled={toggleMenu ? false : true}
					>
						Projects
					</NavLink>
				</div>
			</div>
		</div>
	);
};
