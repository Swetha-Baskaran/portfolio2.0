import classes from "./style.module.scss";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Skills from "../skills/Skills"
import { Button } from "@mui/material";
import  Title  from "../../components/Titles";

const AboutMe = () => {
	return (
		<>
			<div className={classes["about-hold"]}>
				<div className={classes["about-me"]}>
					<div className={classes["about-heading"]}>Bit about me</div>
					<p
						className={
							classes["about-content"]
						}>{`I'm Swetha Baskaran, a Frontend Developer. `}</p>
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
					<Button variant="outlined" style={customStyles.downloadBtn}>Download CV</Button>
				</div>
				<div className={classes["qualification"]}>
					<img
						src='/assets/me.png'
						alt=''
						// width='100'
						// height='100'
						className={classes["aboutImg"]}
						style={customStyles.aboutImg}
						layout="fill"
					/>
				</div>
			</div>
			<div className={classes["about-hold"]}>
				<div className={classes["about-me"]}>
					<div className={classes["about-heading"]}>What I’m Made Of	.</div>
					<Skills />
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
					<div className={classes["description"]}>
						<BsGraphUp className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>Learning</h2>
							<p>Node Js</p>
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
		borderRadius: "6rem 0 6rem 0"
	},
	downloadBtn: {
		borderRadius: "16px 0 16px 0"
	}
}
