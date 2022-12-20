import classes from "./style.module.scss";
// import BouncingArrow from "../../components/BouncingArrow"
import { Button } from "@mui/material";

const HeroPage = () => {
	return (
		<>
			<div className={classes["header"]}>
				<video autoPlay muted loop className={classes["myVideo"]}>
					<source src='assets/videos/mobilevideo.mp4' type='video/mp4' />
				</video>
				<div className={classes["home-partition"]}>
					<section className={classes["nav"]}>
						<p className={classes["intro-text"]}>
							{"hey I'm"}
							<span className={classes["side-line"]}></span>
						</p>
						<br />
						<h1 className={classes["title"]}>SWETHA.</h1>
						<h3 className={classes["loader"]}>
							<span className={classes["m"]}>a</span>
							<span className={classes["m"]}>&nbsp;</span>
							<span className={classes["m"]}>F</span>
							<span className={classes["m"]}>U</span>
							<span className={classes["m"]}>L</span>
							<span className={classes["m"]}>L</span>
							<span className={classes["m"]}>S</span>
							<span className={classes["m"]}>T</span>
							<span className={classes["m"]}>A</span>
							<span className={classes["m"]}>C</span>
							<span className={classes["m"]}>K</span>
							<span className={classes["m"]}>&nbsp;</span>
							<span className={classes["m"]}>D</span>
							<span className={classes["m"]}>E</span>
							<span className={classes["m"]}>V</span>
							<span className={classes["m"]}>E</span>
							<span className={classes["m"]}>L</span>
							<span className={classes["m"]}>O</span>
							<span className={classes["m"]}>P</span>
							<span className={classes["m"]}>E</span>
							<span className={classes["m"]}>R</span>
						</h3>
						<p>
							I like to design and code user-friendly websites. Nice to
							meet you.
						</p>
						{/* <BouncingArrow /> */}
						<div className={classes["learn-more-hold"]}>
							<Button className={classes["learn-more"]}>
								Download CV
							</Button>
							<Button className={classes["learn-more"]}>
								View Projects
							</Button>
						</div>
					</section>
					<div className={classes["heroImg-hold"]}>
						{/* <img
							src='/assets/heroImg.jpg'
							alt=''
							width='100'
							height='100'
							style={customStyles.heroImg}
						/> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroPage;

const customStyles = {
	heroImg: {
		width: "100%",
		height: "100%",
		borderRadius: "50%",
		visibility: "hidden",
	},
};
