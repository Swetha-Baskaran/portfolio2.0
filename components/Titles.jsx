import classes from "./style.module.scss"
const Titles = ({ name }) => {
  return (
    <div  data-aos="fade-down" className={classes["titles"]}>
       {name}
    </div>
  )
}

export default Titles