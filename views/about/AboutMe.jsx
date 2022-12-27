import classes from "./style.module.scss";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Skills from "../skills/Skills";
import { Button } from "@mui/material";
import Title from "../../components/Titles";

const AboutMe = () => {
	return (
		<>
			<div className={classes["about-hold"]} id="About">
				<div className={classes["about-me"]}>
					<div className={classes["about-heading"]} data-aos='fade-down'>
						Bit about me
					</div>
					<p
						data-aos='fade-down'
						className={
							classes["about-content"]
						}>{`I'm Swetha Baskaran, a Frontend Developer. `}</p>
					<p  data-aos="fade-down" className={classes["about-content"]}>
						{`I was passionated on
					programming and having the ability to solve problems. I started
					coding at my age of 17 and I was completely addicted to it. I
					wished to become a own stuff full stack web developer within a
					short while as I was working for that. I'm an optimistic person
					aspiring to become a tech entrepreneur. I was intrested in
					blockchain and web3 and also fascinated to learn futuristic
					technologies. That's all about my short story.I was passionated on
					programming and having the ability to solve problems.`}
					</p>
				</div>
				<div  data-aos="fade-down" className={classes["qualification"]}>
					<img
						src='/assets/me.png'
						alt=''
						className={classes["aboutImg"]}
						style={customStyles.aboutImg}
						layout='fill'
					/>
				</div>
			</div>
			<div className={classes["about-hold"]} id="Skills">
				<div className={classes["about-me"]}>
					<div  data-aos="fade-down" className={classes["about-heading"]}>
						What I’m Made Of .
					</div>
					<Skills />
				</div>
				<div className={classes["qualification"]}>
					<div  data-aos="fade-down" className={classes["description"]}>
						<RiCodeSSlashFill className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>Software Engineer Intern</h2>
							<p>Coginved Solutions, LLp</p>
						</div>
					</div>
					<div  data-aos="fade-down" className={classes["description"]}>
						<FaUniversity className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>B.Tech Student</h2>
							<p>Information Technology</p>
							<p>Puducherry Technological Univesity</p>
						</div>
					</div>
					<div  data-aos="fade-down" className={classes["description"]}>
						<BsGraphUp className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>Intrested in</h2>
							<p>DevOps</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutMe;

const customStyles = {
	aboutImg: {
		borderRadius: "6rem 0 6rem 0",
	},
	downloadBtn: {
		borderRadius: "16px 0 16px 0",
	},
};
