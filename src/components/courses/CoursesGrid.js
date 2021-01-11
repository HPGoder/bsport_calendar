import {Grid} from '@material-ui/core';
import CourseCard from './CourseCard';



const CoursesGrid = (props) => {
    return ( 
        <Grid container justify="center" spacing={2}>
                {props.courses.map((course) =>(
                    <CourseCard key={course.id} course={course}/>
                ))}
        </Grid>
     );
}
 
export default CoursesGrid;