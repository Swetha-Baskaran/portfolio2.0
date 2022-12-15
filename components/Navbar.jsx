import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineInstagram,
} from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import classes from "./style.module.scss";
import Image from "next/image";
import img from "../public/assets/SweIcon.png";

const drawerWidth = "100%";
const navItems = ["Details", "Skills", "Projects", "Contact"];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={customStyles.drawer}>
			<List>
				{navItems.map(item => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div style={customStyles.navbar}>
			<IconButton
				aria-label='open drawer'
				edge='start'
				onClick={handleDrawerToggle}
				className={classes["hamburgerMenu"]}
				sx={{ display: { sm: "none" } }}>
				<MenuIcon className={classes["icon"]} />
			</IconButton>	
			<AppBar className={classes["appbar"]} component='nav'>
				<Toolbar style={customStyles.toolbar}>
					<Typography
						variant='h6'
						component='div'
						className={classes["myIcon"]}
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						<Image src={img} alt='' />
					</Typography>
					<Box
						sx={{ display: { xs: "none", sm: "block" } }}
						style={customStyles.navbuttons}>
						{navItems.map(item => (
							<Button
								key={item}
								sx={{
									color: "black",
									display: { xs: "none", sm: "block" },
								}}
								style={customStyles.buttons}>
								{item}
							</Button>
						))}
					</Box>
					<Box style={customStyles.iconbuttons}>
						<AiOutlineGithub />
						<AiOutlineTwitter />
						<AiOutlineInstagram />
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					anchor='top'
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
			</Box>
		</div>
	);
}

export default DrawerAppBar;

const customStyles = {
	navbar: {
		display: "flex",
		overflow: "hidden",
		position: "fixed",
		zIndex: "11",
		padding: "0",
	},
	hidden: {
		display: "none",
	},
	toolbar: {
		flexDirection: "column",
		textAlign: "left",
		alignItems: "center",
		justifyContent: "space-evenly",
		padding: "0",
		height: "100vh",
	},
	navbuttons: {
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		alignItems: "center",
		height: "100vh",
		padding: "0",
		justifyContent: "space-evenly",
	},
	iconbuttons: {
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		alignItems: "center",
		height: "11ch",
		padding: "0 0 2rem 0",
		justifyContent: "space-evenly",
		fontSize: "1.5rem",
	},
	buttons: {
		transform: "rotate(-90deg)",
	},
	drawer: {
		textAlign: "center",
		height: "100vh",
	},
};
