import {useState} from "react";
import Pagination from "@mui/material/Pagination";
import IndividualProject from "./Card";
import classes from "./style.module.scss";
import Grid from "@mui/material/Grid";
import Titles from "../../components/Titles";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {ProjectUrl} from "../../data/projects";
import {useRouter} from "next/router";

const Projects = () => {
	const Router = useRouter();
	const Projects =
		Router.pathname === "/Projects" ? ProjectUrl : ProjectUrl.slice(0, 5);
	return (
		<>
			<div className={classes["project-container"]} id='Projects'>
				<Titles name='My Recent Works.' />
				<Typography data-aos='fade-down'>
					Here are few projects I have worked on recently.
				</Typography>
				<Grid container className={classes["grid"]}>
					{Projects.map((e, index) => {
						return <IndividualProject key={index} data={e} />;
					})}
				</Grid>
				{Router.pathname !== "/Projects" && (
					<Button
						variant='outlined'
						href='/Projects'
						className={classes["link"]}
					>
						See More
					</Button>
				)}
			</div>
		</>
	);
};

export default Projects;
