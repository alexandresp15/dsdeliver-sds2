import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as InstragramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com/" target="_new">
                    <YouTubeIcon /> 
                </a>
                <a href="https://www.linkedin.com/in/alexandresp15/" target="_new">
                    <LinkedinIcon /> 
                </a>
                <a href="https://www.instagram.com/">
                    <InstragramIcon /> 
                </a>
            </div>
        </footer>
        )
    }

export default Footer;