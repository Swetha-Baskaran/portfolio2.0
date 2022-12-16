import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Titles from "../../components/Titles";
import { imageUrl } from "./images";
import classes from "./style.module.scss";
import Image from "next/image";

const Skills = () => {
	return (
		<div className={classes["skill-hold"]}>
			<Titles name='What i do.' />
			<Grid container className={classes["skill-card-hold"]}>
				{imageUrl.map(e => {
					return (
						<div key={e.url} className={classes["skill-card"]}>
							<Image src={e.url} alt={e.name} className={classes["img"]} height="100%" width="100%" />
							<p>{e.name}</p>
							<Skeleton
								animation='wave'
								variant='rounded'
								className={classes["skeleton"]}
							/>
						</div>
					);
				})}
			</Grid>
		</div>
	);
};

export default Skills;
