import Titles from "../../components/Titles";
import { services } from "../../data/services";
import classes from "./style.module.scss";

const Services = () => {
	return (
		<div>
			<div className={classes["wrapper"]}>
				<Titles name='Services.' />
				{
					services.map((e, index) => {
						return  <div className={classes["card"]} data-aos='fade-down' key={index}>
						           <h3 className={classes["card-title"]}>{e.service}</h3>
						           <p className={classes["card-content"]}>{e.description}</p>
					        </div>
					})
				}
			</div>
		</div>
	);
};

export default Services;
