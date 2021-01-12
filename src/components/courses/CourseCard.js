import {useState} from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import useFetch2 from '../customHooks/useFetch2';
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    backgroundColor: '',
      '&:hover': {
        background: "#e3f2fd",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CourseCard = ({course, handleMetaActivtySelected}) => {
      const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const classes = useStyles();

      const start = new Date(course.date_start)
      const start_day = `${week[start.getDay()]} ${start.toISOString().split('T')[0]}`
      const start_hour = start.toISOString().split('T')[1].split('.')[0]
      
      const [courseDetailsUrl] = useState(`https://api.staging.bsport.io/api/v1/meta-activity/?id__in=${course.meta_activity}&company=6`)
      const { data : courseDetails} = useFetch2(courseDetailsUrl)

      return (
        <Box m={1}>
          { courseDetails && 
                <Card className={classes.root} onClick={() => handleMetaActivtySelected(course.meta_activity, course.establishment, course.coach, course.id)}>
                <CardContent>
                  <Typography variant="h6" component="h2" align="center" color="primary"> {courseDetails.name}
                  </Typography>
                  <Divider />

                  <Typography className={classes.pos} color="textSecondary" align="center">{start_hour}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary" align="center">{'level:'+ course.level}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary" align="center">
                    {course.duration_minute + ' min'}
                  </Typography>
                </CardContent>
                <CardActions>
                {start_day} 
                </CardActions>
              </Card>
          }
        </Box>
      );
}

export default CourseCard;