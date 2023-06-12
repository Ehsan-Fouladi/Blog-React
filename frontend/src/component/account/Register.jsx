import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBInputGroup,
    MDBBtn,
} from 'mdb-react-ui-kit';
import  {useFormik} from "formik";
import * as Yup from "yup"

const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            password2: '',
        }, onSubmit: values => {
            alert(JSON.stringify(values))
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required('Required'),
            password: Yup.string().required('Please Enter your password').matches("[a-z][0-9]", "Password must have 8 characters and 0 to 9 lowercase"),
            password2: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match")
        })
    });

    return (
        <MDBValidation className='row g-3 flex-column justify-content-center m-auto' onSubmit={formik.handleSubmit}>
            <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
                <MDBInputGroup textBefore='@'>
                    <input
                        type='email'
                        id='email'
                        className='form-control'
                        placeholder='Email'
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? <span style={{color: 'red'}}>{formik.errors.email}</span> : null}
                </MDBInputGroup>
            </MDBValidationItem>
            <MDBValidationItem className='col-md-4'>
                <MDBInput
                    type="password"
                    id='password'
                    label='Password'
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? <span style={{color: 'red'}}>{formik.errors.password}</span> : null}
            </MDBValidationItem>
            <MDBValidationItem className='col-md-4'>
                <MDBInput
                    type="password"
                    id='password2'
                    label='Password Confirmation'
                    {...formik.getFieldProps("password2")}
                />
                {formik.touched.password2 && formik.errors.password2 ? <span style={{color: 'red'}}>{formik.errors.password2}</span> : null}
            </MDBValidationItem>
            <div className='col-12'>
                <MDBBtn type='submit' className="btn btn-success">Submit</MDBBtn>
            </div>
        </MDBValidation>)
}
export default Register;