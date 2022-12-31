import {useState} from "react";
import {GoMail, GoLocation} from "react-icons/go";
import Titles from "../../components/Titles";
import Form from "./Form";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./style.module.scss";
import Divider from "@mui/material/Divider";
import {FiPhoneCall} from "react-icons/fi";
import CallDialouge from "../../components/CallDialouge";

const Contacts = () => {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const notify = () =>
		toast.success("Email Successfully Sent", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	return (
		<>
			<div className={classes["contacts-hold"]} id='Contact'>
				<div className={classes["contacts"]}>
					<Titles name='Get in touch.' />
					<p data-aos='fade-down'>
						Fill in the form to get in contact with me.
					</p>
					<div className={classes["my-contacts"]}>
						<div className={classes["items"]} data-aos='fade-down'>
							<GoMail className={classes["icon"]} />
							<a href='mailto:swethasambothi@gmail.com?subject:Connecting to you'>
								swethasambothi@gmail.com
							</a>
						</div>
						<div onClick={handleClickOpen} className={classes["items"]} data-aos='fade-down'>
							<FiPhoneCall className={classes["icon"]} />
							<p>+91 8838526400</p>
						</div>
						<div className={classes["items"]} data-aos='fade-down'>
							<GoLocation className={classes["icon"]} />
							<p>Puducherry, India</p>
						</div>
					</div>
				</div>
				<Divider orientation='vertical' flexItem>
					or
				</Divider>
				<Form notify={notify} />
			</div>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
			<CallDialouge open={open} handleClose={handleClose} />
		</>
	);
};

export default Contacts;
