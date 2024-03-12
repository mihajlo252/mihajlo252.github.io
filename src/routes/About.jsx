import React from "react";
import { CvModal } from "../components/CvModal";
import { BsArrowsAngleExpand } from "react-icons/bs";

export const About = () => {
	return (
		<div className="hero place-items-start justify-center px-44 py-44 max-[1500px]:px-32 max-[800px]:px-32">
			<div className="hero-content max-w-full flex-col items-start gap-20 p-0">
				<header>
					<h1 className="mb-10 w-[90%] max-w-max text-5xl font-bold text-secondary max-[700px]:text-4xl">
						Hello! I'm Mihajlo.
					</h1>

					<p>
						My journey into frontend development began alongside my studies, as I eagerly sought opportunities to apply
						my coding skills and bring projects to life. Through a combination of coursework and real-world projects,
						I've honed my abilities in HTML, CSS, and JavaScript, continually pushing myself to learn and grow in this
						dynamic field.
					</p>
					<br />
					<p className="max-[700px]:text-[.9rem]">
						With over two years of hands-on experience in learning web development and building websites under my belt,
						I'm deeply passionate about crafting engaging user experiences through code. While currently pursuing my
						degree in Mechanical Engineering, I've dedicated myself to frontend development, where I strive to not only
						write clean and efficient code but also create memorable digital experiences.
					</p>
				</header>
				<section className="flex flex-col gap-20 min-[1400px]:flex-row">
					<div className="relative flex flex-col gap-5">
						<h2 className="mb-10 w-[90%] max-w-max text-3xl font-bold text-secondary max-[700px]:text-2xl">Skills</h2>
						<p className="max-[700px]:text-[.9rem]">
							In addition to my strong foundation in HTML, CSS, and JavaScript, I bring hands-on experience with popular
							frontend frameworks like ReactJS and Angular, as well as proficiency in CSS frameworks such as Tailwind.
							My familiarity with version control systems like Git ensures efficient collaboration and streamlined
							development processes.
						</p>
						<p>
							Furthermore, I bring a well-rounded skill set that extends beyond frontend development. I have practical
							experience with backend technologies such as Node.js/Express.js for server-side development and databases
							including MySQL, MongoDB, Firebase, and Supabase for data management. This breadth of expertise allows me
							to seamlessly integrate frontend and backend components to deliver comprehensive and scalable solutions.
						</p>
						<br />
						<h2 className="mb-10 w-[90%] max-w-max text-3xl font-bold text-secondary max-[700px]:text-2xl">Projects</h2>
						<p className="max-[700px]:text-[.9rem]">
							I've listed a few projects that I have worked on or am currently working on. You can find them within the
							Project section of this website. There I go into detail about each project.
						</p>
						<br />
						<h2 className="mb-10 w-[90%] max-w-max text-3xl font-bold text-secondary max-[700px]:text-2xl">
							Contact and Links
						</h2>
						<p className="max-[700px]:text-[.9rem]">
							Ready to collaborate? Let's connect! Whether you have a specific project in mind or just want to chat
							about frontend development, I'd love to hear from you. Feel free to reach out via email at mihajlo.kostic25200@gmail.com
							or connect with me on <a className="link text-secondary" href="https://www.linkedin.com/in/mihajlo-kostic/">LinkedIn</a>.
						</p>
					</div>
					<div className="flex flex-col gap-5 max-[1400px]:place-self-center">
						<div className="relative">
							<img src="assets/cv/Mihajlo_Kostic_CV.png" className="max-w-sm rounded-lg shadow-2xl" alt="CV Example" />
							<button
								className="btn absolute bottom-2 right-2 rounded-full border-none bg-base-300 bg-opacity-50 max-[800px]:hidden"
								onClick={() => window.my_modal_1.showModal()}
								aria-label="Expand Image"
							>
								<BsArrowsAngleExpand />
							</button>
						</div>
						<CvModal />
						<a href={`assets/cv/Mihajlo_Kostic_CV.pdf`} download="Mihajlo_Kostic_CV.pdf" className="btn btn-primary">
							DOWNLOAD
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};
