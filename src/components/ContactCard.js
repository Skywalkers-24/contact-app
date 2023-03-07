import React from 'react';
import {Link} from 'react-router-dom';
import user from "./user.png"
const ContactCard = (props) => {
  console.log(props.contacts,"ContactCard");
    const { id, name, email } = props.contacts;
    return (
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <Link
            to={{ pathname: `/contact/${id}`, state:{ contact: props.contacts } }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHander(id)}
        ></i>
      </div>
    );
  };
  
  export default ContactCard;
  