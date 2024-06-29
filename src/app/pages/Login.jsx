import { t } from "i18next";
import { useEffect, useState } from "react";

import '../components/login/login.css';
import { REFRESH_TOKEN, TOKEN } from "../../utils/Constants";
import toast from "../../utils/toast";
import { ToastContainer } from 'react-toastify';
import { LoginHero } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

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
        if (email === "ali@test.com" && password === "123456") {
            localStorage.setItem("email", email);
            localStorage.setItem("MercorUserToken", TOKEN);
            localStorage.setItem("MercorRefreshToken", REFRESH_TOKEN);
            navigate("/ai-search");
        } else {
            toast('Invalid email or password', 'error');
        }
    }

    useEffect(() => {
        const emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const passwordReg = /^[a-zA-Z0-9]{6,}$/;

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
    useEffect(() => {
        if (localStorage.getItem("MercorUserToken")) {
            navigate("/ai-search");
        }
    }, [])

    return (
        <div className="login">
            <ToastContainer />
            <div className="login_card">
                <div className="login_card_hero" >
                    <img src={LoginHero} alt="Marcus AI" className="login_card-img" />
                </div>
                <div className=" flex flex-column gap-5">
                    <div>
                        <p className="login_header">{t("Welcome to Marcus AI")}</p>
                    </div>
                    {/* Email/Phone */}
                    <div className="flex flex-column gap-5 flex-jc-sb">
                        <p className="bold">
                            {t("Login to your account")}
                        </p>

                        <div className="flex flex-column gap-2">
                            <div className="flex flex-column gap-1">
                                <label
                                    htmlFor="email-phone"
                                    className="label"
                                    id="email-phone"
                                >{t('Email/Phone')}</label>
                                <input type="text"
                                    className="login_input"
                                    id="email-phone"
                                    placeholder={t('Enter your email or phone no.')}
                                    onChange={handleEmail}
                                />
                            </div>

                            <div className="flex flex-column gap-1">
                                <label
                                    htmlFor="password"
                                    className="label"
                                    id="password"
                                >{t('Password')}</label>
                                <input type="password"
                                    className="login_input"
                                    id="password"
                                    placeholder={t('Enter your password')}
                                    onChange={handlePassword}
                                />
                            </div>

                            <div className="flex mt-1r flex-jc-r">
                                <button
                                    className="btn-primary login-btn"
                                    id="login"
                                    onClick={handleLogin}
                                    disabled={!(isEmailValid && isPasswordValid)}
                                >{t('tLogin')}</button>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
