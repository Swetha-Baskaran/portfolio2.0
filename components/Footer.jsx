import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import classes from "./style.module.scss";
import {BsLinkedin, BsInstagram, BsTwitter, BsGithub} from "react-icons/bs";
import {navItems} from "../data/navItems";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SocialLinks } from "../data/socialLinks";

const Footer = () => {
	return (
		<>
			<div className={classes["footer"]}>
				<div className={classes["footer-content"]}>
					<img
						alt='mypic'
						className={classes["my-pic"]}
						src='/assets/me.png'
					/>
					<div className={classes["content"]}>
						<div className={classes["text"]}>
							<h1>Have any idea ?</h1>
							<p>discuss with me</p>
						</div>
						<div className={classes["icon-hold"]}>
							<a href={SocialLinks.linkedIn} className={classes["icon"]}>
								<BsLinkedin />
							</a>
							<a href={SocialLinks.github} className={classes["icon"]}>
								<BsGithub />
							</a>
							<a href={SocialLinks.twitter} className={classes["icon"]}>
								<BsTwitter />
							</a>
							<a href={SocialLinks.instagram} className={classes["icon"]}>
								<BsInstagram />
							</a>
						</div>
					</div>
					<div className={classes["bottom-nav"]}>
						<Stack
							direction='row'
							style={customStyle.bottomNav}
							divider={
								<Divider
									orientation='vertical'
									color='inherit'
									style={customStyle.divider}
									flexItem
								/>
							}
							spacing={5}
						>
							{navItems.map((e, index) => {
								return (
									<AnchorLink href={e.link} key={index}>
										<div className={classes["navs"]}>{e.menu}</div>
									</AnchorLink>
								);
							})}
						</Stack>
					</div>
				</div>
				<div className={classes["next-js"]}>created using next js</div>
			</div>
		</>
	);
};

const customStyle = {
	bottomNav: {
		textAlign: "center",
		justifyContent: "center",
		padding: "1rem 0 2rem 0",
	},
	divider: {},
};

export default Footer;
