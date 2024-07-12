import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AllProjects = () => {
// aos plugin for animation
	const aos=AOS.init({
		offset: 160,
		duration: 800,
		once: true,
	});
	return (
		<div className="all-projects-container" data-aos="zoom-in-up">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
