import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { GrClose } from "react-icons/gr";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Slide from "@mui/material/Slide";
import ThemeSwitch from "./ThemeSwitch";

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

export default function Navbar(props) {
	const { window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});
	const drawerWidth = "100%";
	const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const drawer = (
		<Box sx={{ textAlign: "left", padding: "1rem 2rem" }}>
			<Typography variant='h6' sx={{ my: 2, fontSize: "2rem" }}>
				<GrClose onClick={handleDrawerToggle} />
			</Typography>
			<List sx={{ textAlign: "center" }}>
				{navItems.map(item => (
					<ListItem
						data-aos='fade-down'
						key={item}
						sx={{
							textAlign: "center",
							margin: "2rem 0",
							padding: "0 1rem",
						}}>
						<ListItemText primary={item} onClick={handleDrawerToggle} />
					</ListItem>
				))}
			</List>
			<div style={customStyles.switchHold}>
				<ThemeSwitch sx={{ textAlign: "center" }} />
			</div>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<HideOnScroll {...props}>
				<AppBar
					style={{
						backgroundColor: trigger
							? "#fff"
							: "rgba(255, 255, 255, 0.806)",
						boxShadow: trigger
							? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
							: "none",
					}}>
					<Toolbar>
						<Typography
							variant='h6'
							component='div'
							sx={{
								flexGrow: 1,
								display: {sm: "block" },
								color: "black",
							}}>
							{"<Swe />"}
						</Typography>
						<Box sx={{ display: { xs: "none", sm: "block" } }}>
							{navItems.map(item => (
								<Button
									style={{ color: "black", padding: "0 1.3rem" }}
									key={item}>
									{item}
								</Button>
							))}
						</Box>
						<Box sx={{ display: { xs: "none", sm: "block" } }}>
							<ThemeSwitch />
						</Box>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ color: "black", display: { sm: "none" } }}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Box component='nav'>
				<SwipeableDrawer
					container={container}
					variant='temporary'
					anchor='top'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					style={{ height: "100vh" }}
					PaperProps={{
						sx: {
							height: "100vh",
							textAlign: "left",
						},
					}}>
					{drawer}
				</SwipeableDrawer>
			</Box>
		</>
	);
}

const customStyles = {
	elevation: {
		backgroundColor: "red",
	},
	appBar: {
		backgroundColor: "white",
		color: "black",
	},
	switchHold: {
		display: "flex",
		justifyContent: "center",
	},
};
