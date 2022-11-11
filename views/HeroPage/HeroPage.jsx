import { useCallback } from "react";
import classes from "./style.module.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleData from "../../data.json";
import devImg from "../../assets/devImage.png";
import Image from "next/image";

const HeroPage = () => {
	const particlesInit = useCallback(async engine => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);
	return (
		<>
			<div className={classes["header"]}>
				<div className={classes["particleHold"]}>
					
				</div>
				<div className={classes["home-partition"]}>
					
					<section className={classes["nav"]}>
						<p className={classes["intro-text"]}>hey there</p>
						<h1 className={classes["title"]}>
							SWETHA <br /> BASKARAN
						</h1>
						<h3 className={classes["loader"]}>
							<span className={classes["m"]}>a</span>
							<span className={classes["m"]}>&nbsp;</span>
							<span className={classes["m"]}>F</span>
							<span className={classes["m"]}>R</span>
							<span className={classes["m"]}>O</span>
							<span className={classes["m"]}>N</span>
							<span className={classes["m"]}>T</span>
							<span className={classes["m"]}>E</span>
							<span className={classes["m"]}>N</span>
							<span className={classes["m"]}>D</span>
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
					</section>
					<section>
						<Image src={devImg} alt="" />
					</section>
				</div>
			</div>
		</>
	);
};

export default HeroPage;
