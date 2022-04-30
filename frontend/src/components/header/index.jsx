import './header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div className="header tools">
                <Link to="https://api.paymentwall.com/developers/home" className="logo"></Link>
                <div className="switch">
                    <div className="personal"><Link to="https://api.paymentwall.com/users/">Personal</Link></div>
                    <div className="business sel"><Link to="https://api.paymentwall.com/developers/">Business</Link></div>
                </div>
                <div className="user">
                    <div className="notifications" id="notifications_div"><img src="/img/ico-user-notifications.png" alt="" width="16" height="16" />
                        <div className="counter" id="counter_body">1</div>
                    </div>
                    <div className="notifications-dropdown" style={{ display: "none" }}>
                        <div className="not-header">Notifications</div>
                        <div className="notification">
                            <div className="col-left">
                                <img src="/img/not-blue.png" alt="" width="11" height="11" />
                            </div>
                            <div className="col-right notification_body" data-id="5365088">
                                <div>Paymentwall Welcomes You!</div>
                                <div>04/23/22 04:35:15</div>
                                <div className="mark_as_read">mark as read</div>
                            </div>
                        </div>
                    </div>
                    <div className="account" onClick={handleClick}>
                        <div className="name">My Account</div>
                        <div className="photo"><img src="/img/icon_contact.png" alt="" width="36" height="36" style={{ borderRadius: "18px" }} /></div><img src="/img/header-user-drop.png" alt="" className="drop" /></div>
                    <div className="account-dropdown" style={{ display: isVisible? 'block' : 'none' }}>
                        <Link to="https://api.paymentwall.com/developers/account"><img src="/img/ico-settings-2.png" alt="" width="13" height="13" /><span>Account Settings</span></Link>
                        <Link to="https://api.paymentwall.com/developers/business"><img src="/img/ico-business-profile.png" alt="" width="13" height="13" /><span>Business Profile</span></Link>
                        <Link to="https://api.paymentwall.com/developers/help/inquiries"><img src="/img/ico-inquiry-2.png" alt="" width="13" height="13" /><span>Inquiries</span></Link>
                        <Link to="https://api.paymentwall.com/developers/help/faq"><img src="/img/ico-header-search-2.png" alt="" width="13" height="13" /><span>FAQ</span></Link>
                        <Link to="/"><img src="/img/ico-logout-2.png" alt="" width="13" height="13" /><span>Log Out</span></Link>
                    </div>
                </div>
                <div className="help"><Link to="https://www.paymentwall.com/documentation/getting-started/">Documentation</Link></div>
            </div>
        </div>
    )
}

export default Header;