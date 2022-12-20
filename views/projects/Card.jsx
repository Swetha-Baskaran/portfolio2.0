import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { RiCodeSSlashFill, RiExternalLinkFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import classes from "./style.module.scss";
import Image from "next/image";

const IndividualProject = ({ handleOpen, imgUrl }) => {
	return (
		<Card
			data-aos='fade-down'
			onClick={handleOpen}
			sx={{ maxWidth: 360 }}
			className={classes["individual-card"]}
			style={customStyle.individualCard}>
			<div className={classes["card-img-hold"]}>
				<Image
					src={imgUrl}
					alt=''
					className={classes["card-img"]}
					layout='fill'
					style={{ padding: "0 1rem" }}
				/>
				<div className={classes["link-btns"]}>
					<FiGithub className={classes["btns"]} />
					<RiExternalLinkFill className={classes["btns"]} />
				</div>
			</div>
			<CardContent className={classes["card-title"]}>Digi App</CardContent>
			<CardContent>
				{`I used react.js Hooks with useState and useEffect, when I scroll-down and the screen comes down Header hides after 250 pixels. Now I want to know how to display Header using the react Hooks when I scroll up.`}
			</CardContent>
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
