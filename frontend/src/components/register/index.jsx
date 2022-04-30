import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

import './register.css'

const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        website_url: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, phone, website_url, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Passwords do not match");
        } else {
            console.log(formData);
            const newUser = {
                name,
                phone,
                website_url,
                email,
                password,
            };
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const body = JSON.stringify(newUser);
                const res = await axios.post("http://127.0.0.1:8000/users/register/", body, config);
                console.log(res.data);
                alert(res.data);
                navigate("/");
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    return (
        <div>
            <div className="c-page c-page--signup  c-page--pwpaymentwall o-wrapper">
                <header className="c-header c-header--pwpaymentwall ">
                    <div className="o-container">
                        <Link className="c-header__logo c-logo c-logo--pwpaymentwall" to="/"></Link>
                        <div className="c-header__nav c-nav c-nav--right ">
                            {/* <div className="c-lang js-lang js-popup-wrapper js-popup"><svg className="c-lang__icon" width="30" height="26"></svg><Link className="">English</Link>
                                <ul className="c-lang__items">
                                    <li><Link to="https://api.paymentwall.com/pwaccount?lang=zh_CN">汉语</Link></li>
                                    <li><Link to="https://api.paymentwall.com/pwaccount?lang=en">English</Link></li>
                                    <li><Link to="https://api.paymentwall.com/pwaccount?lang=ko">Korean </Link></li>
                                    <li><Link to="https://api.paymentwall.com/pwaccount?lang=ru">Русский</Link></li>
                                </ul>
                            </div> */}
                            <Link className="c-nav__link" to="/login">Log in</Link></div>
                    </div>
                </header>
                <div className="c-main">
                    <div className="o-container">
                        <form className="c-form js-signup-form" id="sign_up_form" data-action="signup" onSubmit={(e) => onSubmit(e)}>
                            <div className="c-form__header">
                                <h1 className="c-form__heading">Sign up for a Merchant Account</h1>
                            </div>

                            <div className="c-form__main">
                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input" id="name" onChange={onChange}
                                        type='text'
                                        name='name'
                                        value={name}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="name">First &amp; Last name</label>
                                </div>
                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input" id="phone" type="text" onChange={onChange}
                                        name='phone'
                                        value={phone}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="phone">Phone Number</label>
                                </div>
                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input js-website-url" id="website_url" type="text" onChange={onChange}
                                        name='website_url'
                                        value={website_url}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="website_url">Website URL</label>
                                </div>
                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input" id="email" type="text" onChange={onChange}
                                        name='email'
                                        value={email}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="email">Email</label>
                                </div>
                                <div className="c-form-group c-form-group--password js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input js-password" id="password" type="password" onChange={onChange}
                                        name='password'
                                        value={password}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="password">Password</label>
                                    <div className="c-checklist js-checklist">
                                        <span className="c-checklist__item js-checklist-item" data-check="validate-characters">
                                            <span className="c-checklist__icon c-checklist__icon--success"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__icon c-checklist__icon--default"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__caption">Characters</span>
                                        </span>
                                        <span className="c-checklist__item js-checklist-item" data-check="validate-numbers">
                                            <span className="c-checklist__icon c-checklist__icon--success"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__icon c-checklist__icon--default"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__caption">Numbers</span>
                                        </span>
                                        <span className="c-checklist__item js-checklist-item" data-check="validate-password-length">
                                            <span className="c-checklist__icon c-checklist__icon--success"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__icon c-checklist__icon--default"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__caption">At least 5 characters long</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input" id="confirm_password" type="password" onChange={onChange}
                                        name='password2'
                                        value={password2}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="confirm_password">Confirm password</label>
                                </div>


                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <div className="c-checkbox">
                                        <input className="c-checkbox__input" type="checkbox" id="agree-policy" />
                                        <label className="c-checkbox__label mi-pseudo" htmlFor="agree-policy">
                                            I agree to the Paymentwall's <Link to="https://www.paymentwall.com/terms" >Terms of Service</Link> and <Link to="https://www.paymentwall.com/merchant-privacypolicy" >Privacy Policy</Link>.
                                        </label>
                                    </div>
                                </div>

                                <div className="c-form__message is-error is-active u-hidden" id="js-agreements-error">
                                    <span className="c-form-message__item">Please, accept our Terms of Service and Privacy Policy to continue.</span>
                                </div>

                                <div className="c-form__message js-form-message"></div>

                                <button className="c-form__submit c-btn c-btn--default js-submit-button" id="submit-form-button" type="submit">
                                    <span className="c-btn__caption">Sign Up</span>
                                    <span className="c-btn__loader"></span>
                                </button>

                                <div className="c-form__submit-notice">
                                    Do you already have a Paymentwall Account? <Link className="c-link c-link--text" to="/login">Log in</Link>.
                                </div>

                            </div>

                            <input type="hidden" name="data[source]" />
                            <input type="hidden" name="data[src_id]" />
                            <input type="hidden" name="mode" />
                        </form>


                    </div>
                </div>
                <footer className="c-footer">
                    <div className="o-container">
                        <div className="c-footer__sertificates"><svg className="c-footer__sertificates-item" width="112" height="42"></svg><svg className="c-footer__sertificates-item" width="114" height="42"></svg><svg className="c-footer__sertificates-item"
                            width="120" height="42"></svg></div>
                        <div className="c-footer__policies on-center"><Link to="https://www.paymentwall.com/en/privacypolicy" >Privacy Policy</Link><Link to="https://www.paymentwall.com/en/terms" >Terms of Service</Link><Link to="https://www.paymentwall.com/en/faq/infringement/485" >DMCA Policy</Link>
                            <Link to="https://www.paymentwall.com/en/cookies-policy" >Cookies Policy</Link><Link to="https://www.paymentwall.com/gdpr" >GDPR Policy</Link></div>
                        <p className="c-footer__copyright on-center">©&nbsp;2022 Paymentwall, Inc. 255 9th Street, San Francisco, CA, 94103.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Register;