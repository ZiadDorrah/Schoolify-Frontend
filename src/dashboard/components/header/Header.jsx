import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

import classes from "./Header.module.css";
const Header = ({ addTitle }) => {
    const [title, setTitle] = useState(addTitle);
    return (
        <div
            className={`${classes.header} ${title !== '' ? 'd-flex justify-content-between align-items-center' : 'd-flex justify-content-end align-items-center'}`}
        >
            {title !== '' ? <h1 className={classes.title}>{title}</h1> : ''}
            <div className="buttons d-flex justify-content-center align-items-center">
                <button
                    className="d-flex  align-items-center"
                    style={{
                        backgroundColor: "#F5F5F6",
                        borderRadius: "50%",
                        padding: "8px",
                    }}
                >
                    <HiOutlineMail
                        style={{
                            width: "40px",
                            height: "40px",
                            color: "#000",
                        }}
                    />
                </button>
                <button
                    className="d-flex  align-items-center"
                    style={{
                        backgroundColor: "#F5F5F6",
                        borderRadius: "50%",
                        marginRight: "16px",
                    }}
                >
                    <IoIosNotificationsOutline
                        style={{
                            width: "40px",
                            height: "40px",
                            color: "#000",
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default Header;
