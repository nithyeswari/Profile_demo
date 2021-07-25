import { Field } from "redux-form";
import CustomInput from "./CustomInput";
import Button from '@material-ui/core/Button';
import DeleteOutlineRounded from '@material-ui/icons/DeleteOutlineRounded';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward'; 

export const CustomFieldArray = (props: any) => {
    const { fields } = props;
    return (
        <div>
            {fields.map((code: any, index: any) => (<div key={index}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                    <div style={{ padding: 10 }}>
                        <DeleteOutlineRounded onClick={() => fields.remove(index)} />
                    </div>
                    <Field
                        name={code}
                        type="text"
                        component={CustomInput}
                        label={`Skill #${index + 1}`}
                    />
                    <div style={{ padding: 10 }}>
                        <ArrowUpward onClick={() => { 
                            let field = fields.splice(index, 1)[0];
                            console.log(field);
                            fields.splice(index-1,0,field)
                        }
                        } />
                    </div>
                    <div style={{ padding: 10 }}>
                        <ArrowDownward onClick={() => fields.remove(index)} />
                    </div>


                </div>

            </div>))
            }

            <Button size="small" color="primary" type="button" onClick={() => fields.push()} >
                Add {!fields.length ? 'Skills' : 'Another'}
            </Button>


        </div>
    )

}