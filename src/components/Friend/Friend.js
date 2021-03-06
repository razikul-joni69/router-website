import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const frienStyles = {
        border: "1px solid cyan",
        margin: "10px",
        borderRadius: "15px",
        padding: "0 10px",
    };
    return (
        <div style={frienStyles}>
            <h4>Friend: {name}</h4>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}>
                <button>Show Details</button>
                </Link> </p>
        </div>
    );
};

export default Friend;
