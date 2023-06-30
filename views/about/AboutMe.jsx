import classes from "./style.module.scss";
import {RiCodeSSlashFill} from "react-icons/ri";
import {FaUniversity} from "react-icons/fa";
import {BsGraphUp} from "react-icons/bs";
import Skills from "../skills/Skills";

const AboutMe = () => {
	return (
		<>
			<div className={classes["about-hold"]} id='About'>
				<div className={classes["about-me"]}>
					<div className={classes["about-heading"]} data-aos='fade-down'>
						Bit about me
					</div>
					<p
						data-aos='fade-down'
						className={classes["about-content"]}
					>{`I'm Swetha Baskaran, a Fullstack Developer. `}</p>
					<p data-aos='fade-down' className={classes["about-content"]}>
						{`I'm passionated on
					programming and having the ability to solve problems. I started
					coding at my age of 17 and I was completely addicted to it. I'm working as a Frontend Dev in a startup, 
					where I'm enjoing to build and work on their product.`}
					</p>
					<p data-aos='fade-down' className={classes["about-content"]}>
						{`I'm an optimistic person
					aspiring to become a tech entrepreneur. And intrested in
					Devops and also fascinated to learn futuristic
					technologies.`}
					</p>
				</div>
				<div data-aos='fade-down' className={classes["qualification"]}>
					<img
						src='/assets/me.png'
						alt=''
						className={classes["aboutImg"]}
						style={customStyles.aboutImg}
						layout='fill'
					/>
				</div>
			</div>
			<div className={classes["about-hold"]} id='Skills'>
				<div className={classes["about-me"]}>
					<div data-aos='fade-down' className={classes["about-heading"]}>
						What I’m Made Of .
					</div>
					<Skills />
				</div>
				<div className={classes["qualification"]}>
					<div data-aos='fade-down' className={classes["description"]}>
						<RiCodeSSlashFill className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>Work : Freelancer</h2>
							<p>Self Employed</p>
						</div>
					</div>
					<div data-aos='fade-down' className={classes["description"]}>
						<FaUniversity className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>Teaching</h2>
							<p>Frontend Technologies</p>
						</div>
					</div>
					<div data-aos='fade-down' className={classes["description"]}>
						<FaUniversity className={classes["icon"]} />
						<div className={classes["content"]}>
							<h2>B.Tech Student</h2>
							<p>Information Technology</p>
							<p>Puducherry Technological Univesity</p>
						</div>
					</div>
					<div data-aos='fade-down' className={classes["description"]}>
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
