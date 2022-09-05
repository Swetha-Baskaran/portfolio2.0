import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import classes from "./style.module.scss";

const Form = () => {
	return (
		<div className={classes["form-hold"]}>
			<TextField
				id='filled-password-input'
				label='Name'
				type='text'
				autoComplete='current-password'
				className={classes["text-field"]}
				variant='filled'
			/>
			<TextField
				id='filled-password-input'
				label='Email'
				type='email'
				autoComplete='current-password'
				className={classes["text-field"]}
				variant='filled'
			/>
			<TextField
				id='filled-multiline-static'
				label='Message'
				multiline
				rows={5}
				className={classes["text-field"]}
				variant='filled'
			/>
			<Button
				className={classes["button"]}
				variant='contained'
				endIcon={<SendIcon />}>
				Send
			</Button>
		</div>
	);
};

export default Form;
