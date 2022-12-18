import classes from "./style.module.scss"

const ProgressBar = ({  progress }) => {
  const ProgressHold = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%"
  }
	const Parentdiv = {
		height: "12px",
		width: "100%",
		backgroundColor: "whitesmoke",
		borderRadius: "10px 0 10px 0",
	};

	const Childdiv = {
		height: "100%",
		width: `${progress}%`,
		backgroundColor: "#5000ca",
		borderRadius: "10px 0 10px 0",
		textAlign: "right",
	};

	const progresstext = {
		padding: "0 1rem",
		color: "black",
		fontWeight: 900,
	};

	return (
		<div className={classes["progressBarHold"]}>
			<div className={classes["ParentDiv"]}>
				<div style={Childdiv}></div>
			</div>
			<span className={classes["progressText"]}>{`${progress}%`}</span>
		</div>
	);
};

export default ProgressBar;
