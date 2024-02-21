import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:infotechsoftwaresolution2024@gmail.com">
          <AiFillMail />
          <span>infotechsoftwaresolution2024@gmail.com</span>
        </a>

        <a href="tel:+917318886644">
          <AiFillPhone />
          <span>+917318886644</span>
        </a>
      </div>
    );
  }
}

export default Contact;
