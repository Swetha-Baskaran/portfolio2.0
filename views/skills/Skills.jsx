import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Titles from "../../components/Titles";
import { SkillsData } from "../../data/images";
import classes from "./style.module.scss";
import Image from "next/image";
import ProgressBar from "../../components/ProgressBar";
import { Box } from "@mui/material";

const Skills = () => {
	return (
		<div className={classes["skill-hold"]}>
			<Box container className={classes["skill-card-hold"]}>
				{SkillsData.map(e => {
					return (
						<div key={e.url} className={classes["skill-card"]}  data-aos="fade-down">
							<p>{e.name}</p>
							<ProgressBar progress={e.progress} />
						</div>
					);
				})}
			</Box>
		</div>
	);
};

export default Skills;
