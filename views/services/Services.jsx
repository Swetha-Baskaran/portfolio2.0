import Title from "../../components/Titles";
import classes from "./style.module.scss"

const Services = () => {
	return (
		<div>
			<div className={classes['wrapper']}>
				<div className={classes['card']}>
					<h3 className={classes['card-title']}>Web Developer</h3>
					<p className={classes['card-content']}>
						Contrary to popular belief, Lorem Ipsum is not simply random
						text. It has roots in a piece of classical Latin literature
						from 45 BC, making it over 2000 years old.
					</p>
				</div>
				<div className={classes['card']}>
					<h3 className={classes['card-title']}>UI designer</h3>
					<p className={classes['card-content']}>
						Contrary to popular belief, Lorem Ipsum is not simply random
						text. It has roots in a piece of classical Latin literature
						from 45 BC, making it over 2000 years old.
					</p>
				</div>
				<div className={classes['card']}>
					<h3 className={classes['card-title']}>Competitive Coder</h3>
					<p className={classes['card-content']}>
						Contrary to popular belief, Lorem Ipsum is not simply random
						text. It has roots in a piece of classical Latin literature
						from 45 BC, making it over 2000 years old.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
