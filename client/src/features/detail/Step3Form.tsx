import React, { Component } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import CustomInput from '../shared/CustomInput';
import IFormProps from "../model/IFormProps";
import Validate from '../validations/Validate';
import CustomCheckbox from "../shared/CustomCheckbox";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

let Step3Form: React.FC<IFormProps & InjectedFormProps<{}, IFormProps>> = (props: any) => {
    const { handleSubmit, pristine, reset, submitting, prevPage } = props
    return (

        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Step 3
                </Typography>
                <form id="detail" onSubmit={handleSubmit}  autoComplete="off">
                    <div>
                        <label htmlFor="canText">Send feedback via text </label>
                        <div>
                            <Field
                                name="canText"
                                id="canText"
                                component={CustomCheckbox}
                                type="checkbox"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="canEmail">Send feedback via email</label>
                        <div>
                            <Field
                                name="canEmail"
                                id="canEmail"
                                component={CustomCheckbox}
                                type="checkbox"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="isTc">Accept T&C </label>
                        <div>
                            <Field
                                name="isTc"
                                id="isTc"
                                component={CustomCheckbox}
                                type="checkbox"
                            />
                        </div>
                    </div>

                     
                </form>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" type="button" onClick={prevPage} >
                    Prev
                </Button>
                <Button size="small" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear
                </Button>
                <Button size="small" color="primary" type="submit" disabled={pristine || submitting} form="detail"   >
                    Save
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
})(Step3Form)
