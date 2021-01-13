import {useState, useEffect} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import useFetch2 from '../customHooks/useFetch2';
import Bookings from './Bookings'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },

  }));
  
const CourseDetailsPanel = ({metaActivitySelected, establishmentSelected, coachSelected, offerSelected}) => {

    const classes = useStyles();

    const [metaActivityUrl, setMetaActivityUrl] = useState(null);
    const [establishmentDetailsUrl, setEstablishmentDetailsUrl] = useState(null);
    const [coachDetailsUrl, setcoachDetailsUrl] = useState(null);

    useEffect(() =>{
        setMetaActivityUrl(`https://api.staging.bsport.io/api/v1/meta-activity/?id__in=${metaActivitySelected}&company=6`)
    }, [metaActivitySelected])

    useEffect(() =>{
        setEstablishmentDetailsUrl(`https://api.staging.bsport.io/api/v1/establishment/?id=${establishmentSelected}`)
    }, [establishmentSelected])

    useEffect(() =>{
        setcoachDetailsUrl(`https://api.staging.bsport.io/api/v1/coach/?id__in=${coachSelected}`)
    }, [coachSelected])

    const { data : metaActivityDetails} = useFetch2(metaActivityUrl);
    const { data : establishmentDetails} = useFetch2(establishmentDetailsUrl);
    const { data : coachDetails} = useFetch2(coachDetailsUrl);

    return ( 
        <div>
            {metaActivityDetails && establishmentDetails && coachDetails && offerSelected &&
            <List className={classes.root}>
                {/* <Typography variant="overline" component="h1" align="center" color="primary">MORE INFO</Typography> */}
                {/* Coach detail */}
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Coach" src={coachDetails.user.photo} className={classes.large} />
                    </ListItemAvatar>
                    <ListItemText primary="Coach" secondary={coachDetails.user.name} />
                </ListItem>
                <Divider />

                {/* Establishment Details */}
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="establishment" src={establishmentDetails.cover} className={classes.large} />
                    </ListItemAvatar>
                    <ListItemText primary={establishmentDetails.title} secondary={establishmentDetails.specific_info} />
                </ListItem>
                <Divider />

                {/* Mete Activity details */}
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Course" src={metaActivityDetails.cover_main} className={classes.large} />
                    </ListItemAvatar>
                    <ListItemText primary={metaActivityDetails.name} secondary={metaActivityDetails.description} />
                </ListItem>
                <Bookings offerSelected={offerSelected}/>
            </List>
            }
            
        </div>
     );
}
 
export default CourseDetailsPanel;