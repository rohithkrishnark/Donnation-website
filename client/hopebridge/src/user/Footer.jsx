import React from "react";
import "./footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return ( 
        <>
         <footer className="footer">
            <div className="footer-section">
                <h3>About Hopebridge</h3>
                <p>Hopebridge is dedicated to connecting those in need with the resources they require. We are committed to making a positive impact in communities around the world.</p>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/projects">Our Projects</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/donate">Donate Now</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Contact Us</h3>
                <ul>
                    <li>Email: support@hopebridge.org</li>
                    <li>Phone: +1 234 567 890</li>
                    <li>Address: 123 Hope Street, City, Country</li>
                </ul>
            </div>

            <div className="footer-section newsletter">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for the latest news and updates.</p>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div className="footer-bottom" style={{marginLeft:"500px"}}>
                &copy; 2024 Hopebridge. All rights reserved.
            </div>
        </footer>
        </>
     );
}

export default Footer;