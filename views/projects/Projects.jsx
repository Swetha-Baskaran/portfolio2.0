import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import IndividualProject from "./Card";
import classes from "./style.module.scss";
import Grid from "@mui/material/Grid";
import Titles from "../../components/Titles";
import { ProjectUrl } from "../../data/projects";
import Fade from "react-reveal/Fade";
import ProjectModal from "../../components/ProjectDetails";

const Projects = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<div className={classes["project-container"]}>
				<Titles name='What I did.' />
				<Grid container className={classes["grid"]}>
					{[1, 2, 3, 4, 5, 6].map((e, index) => {
						return (
							<Fade bottom big opposite key={index}>
								<IndividualProject handleOpen={handleOpen} />
							</Fade>
						);
					})}
				</Grid>
				<Pagination
					count={2}
					variant='outlined'
					color='primary'
					className={classes["pagnation"]}
				/>
			</div>
			<ProjectModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
		</>
	);
};

export default Projects;
