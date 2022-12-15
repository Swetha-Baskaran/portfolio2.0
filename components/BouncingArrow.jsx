import classes from "./style.module.scss"
import { FiChevronsDown, FiChevronDown } from "react-icons/fi"

const BouncingArrow = () => {
  return (
    <div className={classes["bounce"]}><FiChevronDown className={classes["arrow"]} /></div>
  )
}

export default BouncingArrow