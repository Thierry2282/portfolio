import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          Crafted by <strong>Thierry Juliot</strong>
        </p>

        <div className='flex gap-10 justify-center items-center'>
          <Link to='/contact' >
          <img
                src="/src/assets/icons/contact.svg"
                alt="contact"
                className='w-6 h-6 object-contain'
              />
          </Link>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
