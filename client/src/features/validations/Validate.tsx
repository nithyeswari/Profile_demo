const validate = (values: { fullname: string; email: string; phonenumber: number, isTc :boolean}) => {
    console.log(values);
    const errors: any = {}
    if (!values.fullname) {
        errors.fullname = 'Required'
    }   
    if (values.email) {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
    }if(!values.isTc){
        errors.isTc = 'Required'
    }
    
    return errors
}

export default validate;