import { t } from "i18next";
import { useEffect, useState } from "react";
import AiSearch from "./AiSearch";
import { REFRESH_TOKEN, TOKEN } from "../../utils/Constants";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

    }

    const handleLogin = () => {
        if ( email==="ali@test.com" && password==="123456") {
            localStorage.setItem("email", email);
            localStorage.setItem("MercorUserToken", TOKEN);
            localStorage.setItem("MercorRefreshToken", REFRESH_TOKEN);
            window.location.href = "/ai-search";
        }else{
            console.log("Invalid email or password")
            //TODO: add toast.
        }
    }

    useEffect(() => {
        const emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const passwordReg = /^[a-zA-Z0-9]{8,}$/;

        if (emailReg.test(email)) {
            setIsEmailValid(true);

        } else {
            console.log("Invalid email format");
            //TODO: activate error message.
        }
        if (passwordReg.test(password)) {
            setIsPasswordValid(true)
        } else {
            console.log("Invalid password format");
            // TODO: activate error message.
        }

    }, [email, password])

if(localStorage.getItem("MercorUserToken")){
    window.location.href = "/ai-search";
    return <AiSearch/>
}

    return (
        <div>
            <div></div>
            <div>
                <h2>{t("Welcome to Marcus AI")}</h2>
                {/* Email/Phone */}
                <p>{t('LoreLorem ipsum dolor sit amet consectetur adipisicing elit. In, amet?m10')}</p>

                <div>
                    <div>
                        <label
                            htmlFor="email-phone"
                            className="label"
                            id="email-phone"
                        >{t('Email/Phone')}</label>
                        <input type="text"
                            className="input"
                            id="email-phone"
                            placeholder={t('Enter your email or phone number')}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="label"
                            id="password"
                        >{t('Password')}</label>
                        <input type="password"
                            className="input"
                            id="password"
                            placeholder={t('Enter your password')}
                            onChange={handlePassword}
                        />
                    </div>
                    <div>
                        <button
                            className="button"
                            id="login"
                            onClick={handleLogin}
                            disabled={!(isEmailValid && isPasswordValid)}
                        >{t('Login')}</button>


                    </div>

                </div>
            </div>
        </div>
    )
}
