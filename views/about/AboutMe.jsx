import classes from "./style.module.scss";
import { RiCodeSSlashFill } from "react-icons/ri"
import { FaUniversity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const AboutMe = () => {
	return (
		<div className={classes["about-hold"]}>
			<div className={classes["about-me"]}>
				<h2 className={classes["about-heading"]}>Bit about me</h2>
				<p className={classes["about-content"]}>{`I'm Swetha Baskaran, a Frontend Developer. `}</p>
				<p className={classes["about-content"]}>
					{`I was passionated on
					programming and having the ability to solve problems. I started
					coding at my age of 17 and I was completely addicted to it. I
					wished to become a own stuff full stack web developer within a
					short while as I was working for that. I'm an optimistic person
					aspiring to become a tech entrepreneur. I was intrested in
					blockchain and web3 and also fascinated to learn futuristic
					technologies. That's all about my short story.I was passionated on
					programming and having the ability to solve problems. I started
					coding at my age of 17 and I was completely addicted to it. I
					wished to become a own stuff full stack web developer within a
					short while as I was working for that. I'm an optimistic person
					aspiring to become a tech entrepreneur. I was intrested in
					blockchain and web3 and also fascinated to learn futuristic
					technologies. That's all about my short story.`}
				</p>
			</div>
			<div className={classes["qualification"]}>
				<div className={classes["description"]}>
					<RiCodeSSlashFill className={classes["icon"]} />
					<div className={classes["content"]}>
						<h2>Software Engineer Intern</h2>
						<p>Coginved Solutions, LLp</p>
					</div>
				</div>
				<div className={classes["description"]}>
					<FaUniversity className={classes["icon"]} />
					<div className={classes["content"]}>
						<h2>B.Tech Student</h2>
						<p>Information Technology</p>
						<p>Puducherry Technological Univesity</p>
					</div>
				</div>
				<div className={classes["description"]}>
					<BsGraphUp className={classes["icon"]} />
					<div className={classes["content"]}>
						<h2>Learning</h2>
						<p>Node Js</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutMe;
