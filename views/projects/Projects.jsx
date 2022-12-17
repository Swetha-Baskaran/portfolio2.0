import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import IndividualProject from "./Card";
import classes from "./style.module.scss";
import Grid from "@mui/material/Grid";
import Titles from "../../components/Titles";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Projects = () => {
	return (
		<>
			<div className={classes["project-container"]}>
				<Titles name='My Recent Works.' />
				<Typography>Here are few projects I have worked on recently.</Typography>
				<Grid container className={classes["grid"]}>
					{[1, 2, 3].map((e, index) => {
						return <IndividualProject key={index} />;
					})}
				</Grid>
				<Button variant='outlined' href='/skills' className={classes["link"]}>
					See More
				</Button>
			</div>
		</>
	);
};

export default Projects;
