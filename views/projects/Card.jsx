import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { RiExternalLinkFill } from "react-icons/ri";
import {FiGithub} from "react-icons/fi";
import classes from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

const IndividualProject = ({handleOpen, data}) => {
	return (
		<Card
			data-aos='fade-down'
			onClick={handleOpen}
			sx={{width: 360}}
			className={classes["individual-card"]}
			style={customStyle.individualCard}
		>
			<div className={classes["card-img-hold"]}>
				<Image
					src={data.img}
					alt=''
					className={classes["card-img"]}
					layout='fill'
					style={{padding: "0 1rem"}}
				/>
				<div className={classes["link-btns"]}>
					<Link href={data.github}>
						<FiGithub className={classes["btns"]} />
					</Link>
					<Link href={data.link}>
						<RiExternalLinkFill className={classes["btns"]} />
					</Link>
				</div>
			</div>
			<CardContent className={classes["card-title"]}>
				{data.name}
			</CardContent>
			<CardContent>{data.details}</CardContent>
			<CardContent className={classes["card-skills"]}>
				{data.technologies.map((e, index) => {
					return (
						<p key={index}>
							<span>{e}</span>
						</p>
					);
				})}
			</CardContent>
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
