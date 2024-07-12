
import jsimage from "../Images/javascript.png"
import htmlimage from "../Images/html.png"
import rectimage from "../Images/react.png"
import tailwindimg from "../Images/tailwind.png"
import cssimage from "../Images/Css image.png"

const INFO = {
	main: {
		title: "Reactfolio by truethari",
		name: "Tharindu N.",
		email: "himanshu9382gurjar@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/HimanshuChouhan25?tab=repositories",
		linkedin: "https://linkedin.com/",
		instagram: "https://www.instagram.com/_himanshu__25_?igsh=eXNvMTgxcWxoNmM=",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack web developer.",
		description:
			"I am a Full-stack developer with knowledge in Node.js,React.js. I have experience of 6 months in React.js for designing, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Himanshu Chouhan . I live in Indore Madhya Pradesh, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: <img src={jsimage} alt="" />,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: <img src={htmlimage} alt="" />,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: <img src={rectimage} alt="" />,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: <img src={tailwindimg} alt="" />,
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: <img src={cssimage} alt="" />,
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
