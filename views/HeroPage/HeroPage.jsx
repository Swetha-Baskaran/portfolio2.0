import classes from "./style.module.scss"
import Button from '@mui/material/Button';

const HeroPage = () => {
  return (
    <div className={classes["hero-hold"]}>
       <div className={classes["hero-content"]}>
         Hi there!<span>-------</span><br />
         I&apos;m Swetha<br />
         a Web Developer
         <Button variant="contained">Contained</Button>
       </div>
       <div className={classes["hero-img"]}>
         <img src="/assets/me.png" />
       </div>
    </div>
  )
}

export default HeroPage