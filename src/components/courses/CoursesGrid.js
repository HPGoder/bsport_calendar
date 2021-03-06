import {Grid} from '@material-ui/core';
import CourseCard from './CourseCard';
import {useState} from 'react'; 
import CourseDetailsPanel from './CourseDetailsPanel'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const CoursesGrid = (props) => {
    const classes = useStyles();

    const [metaActivtySelected, setmetaActivitySelected] = useState(null);
    const [establishmentSelected, SetEstablishmentSelected] = useState(null);
    const [coachSelected, setCoachSeleted] = useState(null);
    const [offerSelected, setOfferSlected] = useState(null);
    const handleMetaActivtySelected = (meta_activity, establishment, coach, offer) => {
        setmetaActivitySelected(meta_activity)
        SetEstablishmentSelected(establishment)
        setCoachSeleted(coach)
        setOfferSlected(offer)
    };
 
    return ( 
        <Grid container  justify="center" direction="row">
            <Grid item xs={2}>
                <Typography variant="overline" component="h1" align="center" color="primary">MORE INFO</Typography>
                    { metaActivtySelected && <CourseDetailsPanel metaActivitySelected={metaActivtySelected} establishmentSelected={establishmentSelected} coachSelected={coachSelected} 
                    offerSelected={offerSelected} />}
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={3}> 
                    {props.courses.map((course) =>(
                        <Grid item xs={10} sm={5} lg={2} xl={2} key={course.id}>
                            <CourseCard key={course.id} course={course} handleMetaActivtySelected={handleMetaActivtySelected}/>
                        </Grid>
                    ))} 
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default CoursesGrid;