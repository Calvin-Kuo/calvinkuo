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
      <p>Hi, I&apos;m Calvin Kuo. I&apos;m a Senior Product Manager who enjoys turning complex
        technical systems into simple, intuitive products that create meaningful customer value.
        My work at <a href="https://att.com/">AT&T</a> sits at the intersection of AI, data, and product strategy.
        I hold a Master of Engineering in Engineering Management from <a href="https://cornell.edu/">Cornell University</a> and
        a Bachelor of Science in Computer Science with a Minor in Entrepreneurship from <a href="https://rutgers.edu">Rutgers University, New Brunswick</a>.
      </p>
      <p>Curious what I&apos;m building outside of work? Check out <a href="https://teamdryft.com/">Dryft</a>.
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
