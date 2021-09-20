import "./contact.scss";

import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-detail">
        <h2>Contact me</h2>
        <p>
          Here is my contact information, if you are interested in starting a
          collaboration.
        </p>
        <ul className="contact-list">
          <li className="contact-item">
            <i className="fas">
              <FontAwesomeIcon icon={["fas", "envelope-square"]} />
            </i>
            <span>maurille.kobri@gmail.com</span>
          </li>
          <li className="contact-item">
            <i className="fas">
              <FontAwesomeIcon icon={["fas", "phone-square"]} />
            </i>
            <span>+46 73 592 4938</span>
          </li>
          <li className="contact-item">
            <i className="fas">
              <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
            </i>
            <span>Stockholm, Sweden</span>
          </li>
        </ul>
      </div>
      <div className="void-space-before-footer">
        <br />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
