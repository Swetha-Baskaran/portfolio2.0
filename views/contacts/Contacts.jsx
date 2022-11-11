import { GoMail } from "react-icons/go";
import Titles from "../../components/Titles";
import Form from "./Form";
import classes from "./style.module.scss";
import Divider from "@mui/material/Divider";

const Contacts = () => {
	return (
		<div className={classes["contacts-hold"]}>
			<div className={classes["contacts"]}>
				<Titles name='Get in touch.' />
				<p>Fill in the form to get in contact with me.</p>
				<div className={classes["my-contacts"]}>
					{[
						"swethasambothi@gmail.com",
						"+91 8838526400",
						"Puducherry, India",
					].map((e, index) => {
						return (
							<div className={classes["items"]} key={index}>
								<GoMail className={classes["icon"]} />
								<p>{e}</p>
							</div>
						);
					})}
				</div>
			</div>
			<Divider orientation='vertical' flexItem>
				or
			</Divider>
			<Form />
		</div>
	);
};

export default Contacts;