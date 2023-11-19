import React from "react";
import { CvModal } from "../components/CvModal";
import { BsArrowsAngleExpand } from "react-icons/bs";

export const About = () => {
	return (
		<div className="hero justify-center place-items-start py-44 px-44 max-[1500px]:px-32 max-[800px]:px-32">
			<div className="hero-content flex-col min-[1400px]:flex-row items-start gap-20 p-0 max-w-full">
				<div className="flex flex-col gap-5 relative">
					<h1 className="text-5xl max-w-max w-[90%] font-bold text-primary mb-10 max-[700px]:text-4xl">
						My name is Mihajlo Kostić and this is me!
					</h1>
					<p className="max-[700px]:text-[.9rem]">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Earum, mollitia
						repellendus? Impedit autem animi nam possimus voluptas. Beatae quibusdam
						magnam incidunt deserunt pariatur repellendus voluptatem, itaque quae, ex,
						laborum corporis? Placeat enim quam excepturi molestias nobis cumque eligendi
						expedita est!
					</p>
					<p className="max-[700px]:text-[.9rem]">
						Dolore rem laboriosam unde libero labore repudiandae consectetur cupiditate
						accusamus id ducimus, praesentium deserunt vel blanditiis facilis quas
						suscipit magnam? Impedit obcaecati illum cum quos, laboriosam autem, ex minus
						quas eos accusantium cupiditate doloribus animi et asperiores velit optio
						excepturi suscipit deleniti eaque sed ea voluptate. Laudantium placeat
						quibusdam illum! Eum id quam unde nihil nostrum laudantium odio, minima
						voluptatem dignissimos reiciendis debitis nemo incidunt reprehenderit fugit
						dolore, modi ab molestiae omnis. Minus amet vel maxime sequi iusto possimus
						iure. Corporis voluptatem nihil quis incidunt nostrum numquam, voluptate odit.
						Deleniti nostrum, modi at esse perspiciatis explicabo quidem pariatur sequi
						expedita tenetur iusto quo ex laudantium placeat nisi sed voluptatibus
						incidunt.
					</p>
					<p className="max-[700px]:text-[.9rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab perferendis
						accusantium voluptate animi similique facere quas facilis magni excepturi
						inventore esse iusto accusamus labore eveniet, porro non quisquam? In. Ipsa
						architecto cum corporis vitae illum culpa qui repudiandae obcaecati quaerat
						assumenda ducimus necessitatibus ab aperiam similique in vel id, blanditiis,
						inventore possimus veritatis odit dolorem. Dolorum est consequatur non.
					</p>
				</div>
				<div className="flex flex-col gap-5 max-[1400px]:place-self-center">
					<div className="relative">
						{/* Izmeniti src i alt po potrebi */}
						<img
							src="assets/cv/Mihajlo_Kostic_CV.png"
							className="max-w-sm rounded-lg shadow-2xl"
							alt="CV Example"
						/>
						<button
							className="btn bg-base-300 border-none bg-opacity-50 absolute bottom-2 right-2 rounded-full max-[800px]:hidden"
							onClick={() => window.my_modal_1.showModal()}
							aria-label="Expand Image"
						>
							<BsArrowsAngleExpand />
						</button>
					</div>
					<CvModal />
					{/* href je path do fajla, a download je samo ime fajla kad ga downloadujes */}
					<a
						href={`assets/cv/Mihajlo_Kostic_CV.pdf`}
						download="Mihajlo_Kostic_CV.pdf"
						className="btn btn-primary"
					>
						DOWNLOAD
					</a>
				</div>
			</div>
		</div>
	);
};
