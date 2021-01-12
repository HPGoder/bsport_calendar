import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
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

const MemberCard = (props) => {
    console.log(props.idmember)
    const classes = useStyles();
    const url = `https://api.staging.bsport.io/api/v1/member/?id__in=${props.idmember}`
    console.log(url)
    
    return (  
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="Coach" src={'member.photo'} className={classes.large} />
                </ListItemAvatar>
            <ListItemText primary="Coach" secondary={'coachDetails.user.name'} />
            </ListItem>
            <Divider />
        </List>
    );
}
 
export default MemberCard;