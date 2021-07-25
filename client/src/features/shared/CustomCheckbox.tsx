import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { IProps } from '../model/IProps'

const CustomCheckbox = ({ input, label }: IProps) => {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={input.value ? true : false}
                        onChange={input.onChange}
                    />
                }
                label={label}
            />
        </div>
    )
}

export default CustomCheckbox;