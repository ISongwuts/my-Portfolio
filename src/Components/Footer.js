import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import "../style/Footer.css";

export default function Footer() {
  return (
    <div className="wrap-footer">
      <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">

                        <div class="contact-social">
                            <ul className="icon-list">
                                <li><a class="hover-target" href="https://www.facebook.com/profile.php?id=100009561062285"><FaFacebook/></a></li>
                                <li><a class="hover-target" href="https://www.instagram.com/isongwut.me/"><FaInstagram /></a></li>
                                <li><a class="hover-target" href="https://www.tiktok.com/@isongwut?is_copy_url=1&is_from_webapp=v1&lang=th-TH"><FaTiktok /></a></li>
                                <li><a class="hover-target" href="https://github.com/ISongwuts"><FaGithub /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p className="footer-content">ISongwuts Copyright &copy; 2021 All Rights Reserved.</p>
    </footer>
    </div>
  );
}
