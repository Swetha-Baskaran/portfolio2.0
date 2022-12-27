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
				sx={{
					'.css-1gzyby-MuiInputBase-root-MuiFilledInput-root': {
						background: '#f5ebffcf',
					},
					'.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root': {
						borderBottom: '1px solid #5000ca' 
					},
					'.css-10botns-MuiInputBase-input-MuiFilledInput-input, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root:hover, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root':{
						background: '#f5ebffcf',
						color:"#5000ca",
					}
				}}
				data-aos="fade-down"
			/>
			<TextField
				id='filled-password-input'
				label='Email'
				type='email'
				autoComplete='current-password'
				className={classes["text-field"]}
				variant='filled'
				sx={{
					'.css-1gzyby-MuiInputBase-root-MuiFilledInput-root': {
						background: '#f5ebffcf',
					},
					'.css-10botns-MuiInputBase-input-MuiFilledInput-input, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root:hover, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root':{
						background: '#f5ebffcf',
					},
					'.css-1gzyby-MuiInputBase-root-MuiFilledInput-root:after':{
						color:"#5000ca",
					},
				}}
				data-aos="fade-down"
			/>
			<TextField
				id='filled-multiline-static'
				label='Message'
				multiline
				rows={5}
				className={classes["text-field"]}
				sx={{
					'.css-1gzyby-MuiInputBase-root-MuiFilledInput-root': {
						background: '#f5ebffcf',
					},
					'.css-1bzp12w-MuiFormControl-root-MuiTextField-root .css-1gzyby-MuiInputBase-root-MuiFilledInput-root .css-10botns-MuiInputBase-input-MuiFilledInput-input, .css-1bzp12w-MuiFormControl-root-MuiTextField-root .css-1gzyby-MuiInputBase-root-MuiFilledInput-root:hover':{
						borderBottom: 'none',
						background: '#f5ebffcf',
					},
					'.css-1gzyby-MuiInputBase-root-MuiFilledInput-root:before':{
						borderBottom: 'none',
					}
				}}
				variant='filled'
				data-aos="fade-down"
			/>
			<Button
				className={classes["button"]}
				variant='contained'
				 data-aos="fade-down"
				endIcon={<SendIcon />}>
				Send
			</Button>
		</div>
	);
};

export default Form;
