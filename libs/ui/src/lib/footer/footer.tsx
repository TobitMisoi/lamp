import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="fc-1">
          <h1>Random</h1>
          <address>
            Ngong Road <br />
            Nairobi, Kenya
          </address>
          <details>
            Mon-Fri <br />
            9AM-7PM <br />
            Sat-Sun: closed
          </details>
        </div>
        <div className="fc-2">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="fc-3">
          <h3>Get In Touch</h3>
          <code>+2547 12345678</code> <br />
          <a href="mailto:randomcollections@gmail.com">
            randomcollections@gmail.com{' '}
          </a>
          <br />
          <ul className="social-links">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-down">
        &copy;2021 - RandomCollection by tobitmisoi. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
