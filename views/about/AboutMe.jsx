import classes from "./style.module.scss";
import Button from "@mui/material/Button";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";

const AboutMe = () => {
	return (
		<div className={classes["about-hold"]}>
			<div className={classes["about-me"]}>
				<h1 className={classes["about-heading"]}>Bit about me</h1>
				<p className={classes["about-content"]}>
					The daguerreotype had shortcomings, notably the fragility of the
					mirror-like image surface and the particular viewing conditions
					required to see the image properly. Each was a unique opaque
					positive that could only be duplicated by copying it with a
					camera. Inventors set about working out improved processes that
					would be more practical. By the end of the 1850s the
					daguerreotype had been replaced by the less expensive and more
					easily viewed ambrotype and tintype, which made use of.
				</p>
				<Button variant='contained'>Download Resume</Button>
				<div className={classes["design"]}></div>
			</div>
			<div className={classes["qualification"]}>
				{[1, 2, 3].map((e, index) => {
					return (
						<div className={classes["description"]} key={index}>
								<SchoolTwoToneIcon className={classes["icon"]} />
							<div className={classes["content"]}>
								<h2>Btech IT</h2>
								<p>
									The daguerreotype had shortcomings, notably the
								</p>
							</div>
						</div>
					);
				})}
        <div className={classes["design"]}></div>
			</div>
		</div>
	);
};
export default AboutMe;
