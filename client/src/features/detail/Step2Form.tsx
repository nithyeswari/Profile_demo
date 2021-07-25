import React from "react";
import { FieldArray, reduxForm, InjectedFormProps } from "redux-form";
import { CustomFieldArray } from "../shared/CustomeFieldArray";
import IFormProps from "../model/IFormProps";
import Validate from '../validations/Validate';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

let Step2Form: React.FC<IFormProps & InjectedFormProps<{}, IFormProps>> = (props: any) => {
    const { handleSubmit, pristine, reset, submitting, prevPage } = props
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Step 2
                </Typography>
                <form id="detail" onSubmit={handleSubmit}  autoComplete="off">
                    <div>
                        <FieldArray name="skills" component={CustomFieldArray} ></FieldArray>
                    </div>
                </form>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" type="button" onClick={prevPage} >
                    Prev
                </Button>
                <Button size="small" color="primary" type="submit" disabled={pristine || submitting} form="detail"   >
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
})(Step2Form)
