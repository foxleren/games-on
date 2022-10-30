import React from "react";

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const completeForm = async (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8080/emails', {
        //     name: toSend.from_name,
        //     phoneNumber: phoneNumber
        // }).then(() => {
        //     //console.log('successful request');
        //     setIsFormCompleted(true);
        // }).catch((err) => console.log(err));
    }

    return (<div className="auth-form-content">
        <div className={'google-auth-button'}>
            REGISTER WITH <div className={'google-auth-icon'}/>
        </div>
        <div className="auth-input-container">
            <input placeholder={'Login / Email'}/>
        </div>
        <form onSubmit={completeForm}>
            <div className="auth-input-container" >
                <input type={isPasswordVisible ? "text" : "password"} placeholder={'Password'}/>
                {isPasswordVisible ? (
                    <svg onClick={() => setIsPasswordVisible(!isPasswordVisible)} width="24" viewBox="0 0 24 24" height="24"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path xmlns="http://www.w3.org/2000/svg" clipRule="evenodd"
                              d="m12 6.00018c-6.54545 0-9 6.00002-9 6.00002s2.45455 6 9 6c4.9091 0 9-6 9-6s-4.0909-6.00002-9-6.00002zm-3 6.00002c0 1.6568 1.3431 3 3 3s3-1.3432 3-3c0-1.6569-1.3431-3.00002-3-3.00002s-3 1.34312-3 3.00002z"
                              fill="#ffb300" fillRule="evenodd"></path>
                    </svg>) : (
                    <svg onClick={() => setIsPasswordVisible(!isPasswordVisible)} width="24" viewBox="0 0 24 24" height="24"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g xmlns="http://www.w3.org/2000/svg" fill="#ffb300">
                            <path clipRule="evenodd"
                                  d="m11.0957 17.9609c.2924.0257.5938.0392.9045.0392 4.9091 0 9-6 9-6s-.6696-.9821-1.7921-2.15162z"
                                  fillRule="evenodd"></path>
                            <path clipRule="evenodd"
                                  d="m14.5051 6.49498c-.7975-.30791-1.6386-.49486-2.5051-.49486-6.54545 0-9 5.99998-9 5.99998s.75006 1.8335 2.52661 3.4734l3.47339-3.4734c0-1.6568 1.3431-2.99998 3-2.99998z"
                                  fillRule="evenodd"></path>
                            <path d="m5.1001 18.4352h19v2h-19z" opacity=".3"
                                  transform="matrix(.70710678 -.70710678 .70710678 .70710678 -11.54187 9.00586)"></path>
                        </g>
                    </svg>)}

            </div>
            <button className="form-button" type='submit'>Log in</button>
        </form>


        {/*<Button content={'Вход'} type={'blue'}/>*/}
    </div>);
}