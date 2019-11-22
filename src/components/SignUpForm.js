import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                className="form-control mb-2 col-md-4"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    );
}

export default SignupForm;