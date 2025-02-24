import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Calvin Y. Kuo</h2>
        <p><a href="mailto:calvinykuo@gmail.com">calvinykuo@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About Me</h2>
      <p>Hi, my name is Calvin Kuo. I am a Senior System Engineering Manager at <a href="https://att.com/">AT&amp;T</a> driving transformative technical products at scale. My background sits at the intersection of data analytics and AI --translating technical complexity into measurable customer outcomes.
        I earned my Master of Engineering in Engineering Management at <a href="https://cornell.edu/">Cornell University</a>.
        I also hold a Bachelor of Science in Computer Science with a Minor in Entrepreneurship from <a href="https://rutgers.edu">Rutgers University - New Brunswick</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Calvin Y. Kuo <Link to="/">https://www.linkedin.com/in/calvin-y-kuo/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
