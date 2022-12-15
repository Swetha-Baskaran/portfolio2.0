import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Titles from "../../components/Titles";
import { imageUrl } from "./content";
import classes from "./style.module.scss";
import Button from "@mui/material/Button";

const Specialization = () => {
	return (
		<div className={classes["skill-hold"]}>
			<Titles name='What i do.' />
			<Grid container className={classes["skill-card-hold"]}>
				{imageUrl.map(e => {
					return (
						<div key={e.url} className={classes["skill-card"]}>
							<img src={e.url} alt={e.name} className={classes["img"]} />
							<p>{e.name}</p>
						</div>
					);
				})}
			</Grid>
			<div className={classes["resume-hold"]}>
				<Button variant='contained' className={classes["resume"]}>
					View My Resume
				</Button>
			</div>
		</div>
	);
};

export default Specialization;
