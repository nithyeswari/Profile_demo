
import { useEffect, useState } from "react";
import { store } from "../../app/store";
import UserDetail from "../detail/UserDetail";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailRounded from '@material-ui/icons/EmailRounded';
import PhoneAndroidRounded from '@material-ui/icons/PhoneAndroidRounded';
import { saveState } from "../../app/localStore";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 20,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));


const dummy: any = {
    fullname: 'Your full name',
    email: 'Your email address',
    telephone: 'Your phone number',
    skills: ['Angular', 'jQuery', 'Polymer', 'React', 'Vue.js']
};
const UserSummary = (props: any) => {
    const classes = useStyles();
    const [user, setUser] = useState(dummy);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state:any = store.getState(); 
            console.log(state);
            let newValue = state.form.detail?.values;
            if( state.form.detail?.user){
                 newValue = state.form.detail.user;
            }
            console.log(newValue);
            setUser(newValue || dummy); 
        })

        return () => {
            unsubscribe();
        };

    },[])

    return (
        <>
            {!edit && <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {user.fullname}
                        </Typography>
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <EmailRounded />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Email" secondary={user.email} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PhoneAndroidRounded />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Phone" secondary={user.telephone} />
                            </ListItem>

                        </List>
                        <Divider />
                        <div className={classes.root}>
                            {user.skills.map((data: any, index: any) => {
                                let icon;
                                if (data === 'React') {
                                    icon = <TagFacesIcon />;
                                }
                                return (
                                    <li key={data}>
                                        <Chip
                                            icon={icon}
                                            label={data}
                                            className={classes.chip}
                                        />
                                    </li>
                                );
                            })}
                        </div>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => { setEdit(true) }}>
                        Edit
                    </Button>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>

            }

            {edit &&
                <UserDetail onSubmit={() => {
                    saveState({
                        user: store.getState().form.detail.values
                    });
                    setEdit(false);
                }
                }></UserDetail>
            }
        </>
    )

}

export default UserSummary;


