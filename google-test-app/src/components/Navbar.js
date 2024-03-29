import "./Navbar.css";
import Profile from "../images/profile.jpg";
import Google from "../images/google.png";
import Youtube from "../images/youtube.png";
import GoogleMap from "../images/google-maps.png";
import GoogleCalendar from "../images/google-calendar.png";
import Gmail from "../images/gmail.png";
import GoogleDrive from "../images/google-drive.png";
import Translate from "../images/translate.png";
import Photos from "../images/google-photos.png";
import GooglePlay from "../images/google-play.png";
import News from "../images/news.png";
import Meet from "../images/meet.png";
import Docs from "../images/docs.png";
import Contact from "../images/add-contact.png";
import Hangoouts from "../images/google-hangouts.png";
import Keeps from "../images/keeps.png";
import Jamboard from "../images/jamboard.png";
import Earth from "../images/world-globe.png";
import Classroom from "../images/google-classroom.png";
import Collection from "../images/collection.png";
import Sheets from "../images/sheets.png";
import Slides from "../images/slides.png";
import Book from "../images/book.png";

import Finance from "../images/growth.png";



import { useState } from "react";

import { Row, Col } from "react-grid-system";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const openDropDown = () => {
        console.log("click !!!");
        console.log(open);
        setOpen(!open);
    };

    return (
        <>
            <Row>
                <Col sm={8}></Col>
                <Col sm={4}>
                    <div className="rightLinks">
                        <CustomLink to="/gmail">Gmail</CustomLink>
                        <CustomLink to="/images">ค้นรูป</CustomLink>
                        <CustomLink to="/circle">วงกลม</CustomLink>

                        <div className="nav-icon">
                            <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                onClick={openDropDown}
                            >
                                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
                            </svg>
                        </div>

                        <div className="nav-icon">
                            {open && (
                                <div className="dropdown">
                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Google}
                                                    className="icon"
                                                ></img>
                                                Search
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Youtube}
                                                    className="icon"
                                                ></img>
                                                YouTube
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={GoogleMap}
                                                    className="icon"
                                                ></img>
                                                Maps
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={GoogleCalendar}
                                                    className="icon"
                                                ></img>
                                                Calendar
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Gmail}
                                                    className="icon"
                                                ></img>
                                                Gmail
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={GoogleDrive}
                                                    className="icon"
                                                ></img>
                                                Drive
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={GoogleCalendar}
                                                    className="icon"
                                                ></img>
                                                Calendar
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Translate}
                                                    className="icon"
                                                ></img>
                                                Translate
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Photos}
                                                    className="icon"
                                                ></img>
                                                Photos
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={GooglePlay}
                                                    className="icon"
                                                ></img>
                                                Play
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={News}
                                                    className="icon"
                                                ></img>
                                                News
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Meet}
                                                    className="icon"
                                                ></img>
                                                Meet
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={GooglePlay}
                                                    className="icon"
                                                ></img>
                                                Play
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={News}
                                                    className="icon"
                                                ></img>
                                                News
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Meet}
                                                    className="icon"
                                                ></img>
                                                Meet
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon_separate" />

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Docs}
                                                    className="icon"
                                                ></img>
                                                Docs
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Contact}
                                                    className="icon"
                                                ></img>
                                                Contacts
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Hangoouts}
                                                    className="icon"
                                                ></img>
                                                Hangoouts
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Keeps}
                                                    className="icon"
                                                ></img>
                                                Keeps
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Classroom}
                                                    className="icon"
                                                ></img>
                                                Classroom
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Jamboard}
                                                    className="icon"
                                                ></img>
                                                Jamboard
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Earth}
                                                    className="icon"
                                                ></img>
                                                Earth
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Collection}
                                                    className="icon"
                                                ></img>
                                                Collection
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Finance}
                                                    className="icon"
                                                ></img>
                                                Finance
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row_item">
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Sheets}
                                                    className="icon"
                                                ></img>
                                                Sheets
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Slides}
                                                    className="icon"
                                                ></img>
                                                Slides
                                            </div>
                                        </div>
                                        <div className="col_item">
                                            <div className="item_container">
                                                <img
                                                    src={Book}
                                                    className="icon"
                                                ></img>
                                                Book
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div>
                            <img
                                src={Profile}
                                alt="บัญชี google"
                                className="profile"
                            ></img>
                        </div>
                    </div>
                    {/* </div> */}
                </Col>
            </Row>
        </>
    );
};

function CustomLink({to, children,...props}){
    return (
        <div className="nav-icon">
            <Link to={to} {...props}>{children}</Link>
        </div>
    )
}
export default Navbar;
