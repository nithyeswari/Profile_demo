import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import CustomInput from '../shared/CustomInput';
import IFormProps from "../model/IFormProps";
import Validate from '../validations/Validate';
import Card from '@material-ui/core/Card'; 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));
let Step1Form: React.FC<IFormProps & InjectedFormProps<{}, IFormProps>> = (props: any) => {
    const classes = useStyles();
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Step 1
                </Typography>
                <form id="detail" className={classes.root} onSubmit={handleSubmit} autoComplete="off">
                    <Field name='fullname'
                        component={CustomInput}
                        label='Full name'
                        type='text'></Field>
                    <Field
                        name="email"
                        label='Email'
                        component={CustomInput}
                        type="email"
                        placeholder="Email"
                    />   <Field
                        name="telephone"
                        label='Telephone'
                        component={CustomInput}
                        type="phone"
                        placeholder="Phone number"
                    />
                </form>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" type="submit" disabled={pristine || submitting}  form="detail"   >
                    Next
                </Button>
                <Button size="small" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear
                </Button>
            </CardActions>
        </Card>


    )
}
export default reduxForm<{}, IFormProps>({
    form: 'detail',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: Validate
})(Step1Form)
