import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import classes from "./style.module.scss";
import axios from "axios";
import {useState} from "react";

const Form = ({ notify }) => {
	let [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		message: "",
	});
    let [validateEmail, setValidateEmail] = useState(false)
	const options = {
		method: "POST",
		url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "7e3622d2a1msh75f497f069a0051p1500b8jsn8fee94ad6cf6",
			"X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
		},
		data: `{"personalizations":[{"to":[{"email":"swetha.b@pec.edu"}],"subject":"${contactInfo.name}: from Portfolio"}],"from":{"email":"${contactInfo.email}"},"content":[{"type":"text/plain","value":"${contactInfo.message}"}]}`,
	};

	const handelOnChange = (e, name) => {
		const value = e.target.value;
		if(name === "email"){
			let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			setValidateEmail(value.match(mailformat) === null ? false : true)
			console.log(value.match(mailformat))
		}
		setContactInfo({
			...contactInfo,
			[name]: value,
		});
	};

	const sendMail = async () => {
		await axios(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
		await setContactInfo({
			name: "",
			email: "",
			message: "",
		})
		await notify()
	};
	return (
		<div className={classes["form-hold"]}>
			<TextField
				id='filled-password-input'
				label='Name'
				type='text'
				autoComplete='current-password'
				className={classes["text-field"]}
				variant='filled'
				value={contactInfo.name}
				onChange={e => {
					handelOnChange(e, "name");
				}}
				sx={{
					".css-1gzyby-MuiInputBase-root-MuiFilledInput-root": {
						background: "#f5ebffcf",
					},
					".css-19mk8g1-MuiInputBase-root-MuiFilledInput-root": {
						borderBottom: "1px solid #5000ca",
					},
					".css-10botns-MuiInputBase-input-MuiFilledInput-input, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root:hover, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root":
						{
							background: "#f5ebffcf",
							color: "#5000ca",
						},
				}}
				data-aos='fade-down'
			/>
			<TextField
			    error={contactInfo.email !== "" && validateEmail === false}
				id='filled-password-input'
				label='Email'
				type='email'
				autoComplete='current-password'
				className={classes["text-field"]}
				value={contactInfo.email}
				onChange={e => {
					handelOnChange(e, "email");
				}}
				variant='filled'
				helperText={contactInfo.email !== "" && validateEmail === false && 'Email should be in format'}
				sx={{
					".css-1gzyby-MuiInputBase-root-MuiFilledInput-root": {
						background: "#f5ebffcf",
					},
					".css-10botns-MuiInputBase-input-MuiFilledInput-input, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root:hover, .css-1gzyby-MuiInputBase-root-MuiFilledInput-root":
						{
							background: "#f5ebffcf",
						},
					".css-1gzyby-MuiInputBase-root-MuiFilledInput-root:after": {
						color: "#5000ca",
					},
				}}
				data-aos='fade-down'
			/>
			<TextField
				id='filled-multiline-static'
				label='Message'
				multiline
				value={contactInfo.message}
				onChange={e => {
					handelOnChange(e, "message");
				}}
				rows={5}
				className={classes["text-field"]}
				sx={{
					".css-1gzyby-MuiInputBase-root-MuiFilledInput-root": {
						background: "#f5ebffcf",
					},
					".css-1bzp12w-MuiFormControl-root-MuiTextField-root .css-1gzyby-MuiInputBase-root-MuiFilledInput-root .css-10botns-MuiInputBase-input-MuiFilledInput-input, .css-1bzp12w-MuiFormControl-root-MuiTextField-root .css-1gzyby-MuiInputBase-root-MuiFilledInput-root:hover":
						{
							borderBottom: "none",
							background: "#f5ebffcf",
						},
					".css-1gzyby-MuiInputBase-root-MuiFilledInput-root:before": {
						borderBottom: "none",
					},
				}}
				variant='filled'
				data-aos='fade-down'
			/>
			<Button
				className={classes["button"]}
				variant='contained'
				onClick={sendMail}
				disabled={
					contactInfo.name === "" ||
					contactInfo.email === "" ||
					contactInfo.message === ""
				}
				endIcon={<SendIcon />}
			>
				Send
			</Button>
		</div>
	);
};

export default Form;
