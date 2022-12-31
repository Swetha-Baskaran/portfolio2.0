import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import classes from "./style.module.scss"

export default function CallDialouge({open, handleClose}) {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					Do you want to make a call ?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button className={classes["call-btn"]} onClick={handleClose} variant="outlined">Close</Button>
				<Button className={classes["call-btn"]} onClick={handleClose} variant="contained" autoFocus>
					<a href='tel:8838526400'>Call</a>
				</Button>
			</DialogActions>
		</Dialog>
	);
}
