import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './acount.css'
import { connect } from 'react-redux';

const Account = (props) => {
  const { userName } = props;
  console.log("~~~~~~~~~~~~~~~~~", props);
  
  useEffect(() => {
    alldata();
  }, [])

  const alldata = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/users/account/");
      // setToken(response.data.accessToken);
      // const decoded = jwt_decode(response.data.accessToken);
      // setName(decoded.name);
      // setExpire(decoded.exp);
      console.log(res);
    } catch (error) {
      // if (error.response) {
      // }

    }
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password_old: "",
    password: "",
    password_again: ""
  });

  const { firstname, lastname, phone, email, password_old, password, password_again } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_again) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
      const newUser = {
        firstname,
        lastname,
        phone,
        email,
        password_old,
        password,
        password_again
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
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };
  return (
    <div className="merchant-area-v7">
      <div className="compliance-container" style={{ margin: "40px 20px 0px 270px" }}>
        <nav className="compliance__nav">
          <ul className="nav__list">
            <li className="list__item list__item--sel">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Account Details</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Feed Settings</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Sub-Accounts</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">SpiderPipe Accounts</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Reporting Settings</Link></div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="compliance">
        <form className="form_big" encType="multipart/form-data" method="POST" id="form_submit" onSubmit={(e) => onSubmit(e)}>
          <input id="js-avatar" type="hidden" name="data[avatar]" />
          <div className="compliance__information">
            <div className="information__section">
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Your name:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input maxLength="30" defaultValue="Ugne" onChange={onChange} name="firstname" type="text" placeholder="First Name" className="control__input" /></div>
                  <div className="control control--md"><input maxLength="30" defaultValue="K" onChange={onChange} name="lastname" type="text" placeholder="Last Name" className="control__input" /></div>
                </div>
              </div>
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Phone number:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input name="phone" defaultValue="863384266" onChange={onChange} maxLength="15" type="text" className="control__input" /></div>
                </div>
              </div>
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Email:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input name="email" defaultValue="kryzeviciute.ugne@gmail.com" onChange={onChange} maxLength="50" type="text" placeholder="Email address" className="control__input" /></div>
                </div>
              </div>
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Password:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input maxLength="32" defaultValue="" name="password_old" onChange={onChange} type="password" placeholder="Current password" className="control__input" /></div>
                </div>
                <div className="field-group__line password" style={{ display: "none" }}>
                  <div className="control control--md"><input maxLength="32" defaultValue="" name="password" onChange={onChange} type="password" placeholder="New password" className="control__input" /></div>
                </div>
                <div className="field-group__line password" style={{ display: "none" }}>
                  <div className="control control--md"><input maxLength="32" defaultValue="" name="password_again" onChange={onChange} type="password" placeholder="New password one more time" className="control__input" /></div>
                </div>
              </div>
              <div className="section__field-group">
                <div className="field-group__line"></div>
              </div><Link to="https://api.paymentwall.com/developers/account#" id="js-show-password" className="section__add section__add--password">Change password</Link>
              <Link to="https://api.paymentwall.com/developers/account#" id="js-hide-password" className="section__add section__add--password" style={{ display: "none" }}>Hide fields, I don't want to change password</Link></div>
            <section className="information__footer"><input defaultValue="Cancel" type="button" id="form_cancel" className="but big cancel" style={{ float: "left", marginRight: "20px", display: "none" }} />
              <button to="#" className="compliance-button compliance-button--next" type='submit'>Save</button></section>
          </div>
        </form>
      </div>

    </div>
  )
}
const mapStateToProps = (state) => {
  return ({
    userName: state.UserName
  });
}
export default connect(mapStateToProps, null)(Account);