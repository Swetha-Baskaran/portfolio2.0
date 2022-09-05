import Pagination from '@mui/material/Pagination';
import IndividualProject from './Card';
import classes from './style.module.scss';
import Grid from '@mui/material/Grid';
import Titles from '../../components/Titles';

const Projects = () => {
  return (
    <div className={classes["project-container"]}>
        <Titles name="What I did." />
        <Grid container className={classes["grid"]}>
          {
            [1,2,3].map((e, index)=>{
                return (<IndividualProject key={index} />)
            })
          }
        </Grid>
        <Pagination count={2} variant="outlined" color="primary" className={classes["pagnation"]}/>
    </div>
  )
}

export default Projects;
