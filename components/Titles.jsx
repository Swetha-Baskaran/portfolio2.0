import classes from "./style.module.scss"
const Titles = ({ name }) => {
  return (
    <div className={classes["titles"]}>
       {name}
    </div>
  )
}

export default Titles