import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { RiCodeSSlashFill, RiExternalLinkFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import classes from "./style.module.scss";

const IndividualProject = () => {
	return (
		// <Card sx={{ maxWidth: 360 }} className={classes["individual-card"]}>
		<Card sx={{ maxWidth: 360 }} className={classes["individual-card"]} style={customStyle.individualCard}>
			<div className={classes["card-img-hold"]}>
				<img
					src='/assets/gatsby-hospital-landing-page.png'
					alt=''
					className={classes["card-img"]}
				/>
				<div className={classes["link-btns"]}>
					<FiGithub className={classes["btns"]} />
					<RiExternalLinkFill className={classes["btns"]} />
				</div>
			</div>
			<CardContent className={classes["card-title"]}>Digi App</CardContent>
			<CardContent className={classes["card-skills"]}>
				<p>
					<RiCodeSSlashFill />
					<span>Html</span>
				</p>
				<p>
					<RiCodeSSlashFill />
					<span>css</span>
				</p>
				<p>
					<RiCodeSSlashFill />
					<span>js</span>
				</p>
			</CardContent>
			{/* <CardContent>
				<Typography variant='body2'>
					This impressive paella is a perfect party dish and a fun meal to, if you like.
				</Typography>
			</CardContent> */}
		</Card>
	);
};

export default IndividualProject;

const customStyle = {
	individualCard: {
		margin: "2rem",
		borderRadius: "30px 0 30px 0",
		boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
		border: "0.2px solid #8080802c",
	},
};
