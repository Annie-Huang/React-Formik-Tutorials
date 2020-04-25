import React from 'react';
import {useFormik} from "formik";

const YoutubeForm = () => {

    // initialValues needs to match the name field in each input
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        }
    });

    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' name='name' />

                <label htmlFor='email'>E-mail</label>
                <input type="text" id='email' name='email' />

                <label htmlFor='channel'>Name</label>
                <input type="text" id='channel' name='channel' />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;
