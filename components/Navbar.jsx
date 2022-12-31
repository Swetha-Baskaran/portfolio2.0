import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {GrClose} from "react-icons/gr";
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
import AnchorLink from "react-anchor-link-smooth-scroll";
import {navItems} from "../data/navItems";
import {useRouter} from "next/router";
import {useContext} from "react";
import {ThemeContext} from "../pages/_app";
import Link from "next/link";

function HideOnScroll(props) {
	const {children, window} = props;
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
	const [lightMode, setLightMode] = useContext(ThemeContext);
	const Router = useRouter();
	const {window} = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});
	const drawerWidth = "100%";
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const drawer = (
		<Box sx={{textAlign: "left", padding: "1rem 2rem"}}>
			<Typography variant='h6' sx={{my: 2, fontSize: "2rem"}}>
				<GrClose onClick={handleDrawerToggle} />
			</Typography>
			<List sx={{textAlign: "center"}}>
				{Router.pathname !== "/Projects" ? (
					navItems.map(item => (
						<ListItem
							data-aos='fade-down'
							key={item.menu}
							sx={{
								textAlign: "center",
								margin: "2rem 0",
								width: "100%",
								padding: "0 1rem",
								justifyContent: "center",
								curor: "pointer",
							}}
						>
							<AnchorLink href={item.link}>
								<ListItemText
									sx={{
										textAlign: "center",
									}}
									primary={item.menu}
									onClick={handleDrawerToggle}
								/>
							</AnchorLink>
						</ListItem>
					))
				) : (
					<ListItem
						sx={{
							textAlign: "center",
							margin: "2rem 0",
							width: "100%",
							padding: "0 1rem",
							justifyContent: "center",
							cursor: "pointer",
						}}
					>
						<Link href='/'>
							<ListItemText
								primary={"Back To Home"}
								onClick={handleDrawerToggle}
								sx={{
									textAlign: "center",
									cursor: "pointer",
								}}
							/>
						</Link>
					</ListItem>
				)}
			</List>
			<div style={customStyles.switchHold}>
				<ThemeSwitch sx={{textAlign: "center"}} />
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
					}}
				>
					<Toolbar>
						<Typography
							variant='h6'
							component='div'
							sx={{
								flexGrow: 1,
								display: {md: "block"},
								color: "black",
							}}
							onClick={() => {
								Router.push("/");
							}}
						>
							{"<Swe />"}
						</Typography>
						<Box sx={{display: {xs: "none", md: "block"}}}>
							{Router.pathname !== "/Projects" ? (
								navItems.map(item => (
									<Button
										style={{color: "black", padding: "0 1.3rem"}}
										key={item.menu}
									>
										<AnchorLink href={item.link}>
											{item.menu}
										</AnchorLink>
									</Button>
								))
							) : (
								<Button
									style={{color: "black", padding: "0 1.3rem"}}
								>
									<Link href="/">Back To Home</Link>
								</Button>
							)}
						</Box>
						<Box sx={{display: {xs: "none", md: "block"}}}>
							<ThemeSwitch />
						</Box>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{color: "black", display: {md: "none"}}}
						>
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
						display: {xs: "block", md: "none"},
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					style={{height: "100vh"}}
					PaperProps={{
						sx: {
							height: "100vh",
							textAlign: "left",
						},
					}}
				>
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
