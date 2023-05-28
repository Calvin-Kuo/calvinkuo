import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Calvin Kuo via email @ calvinykuo@gmail@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Do not hesitate to reach out. You can email me at: </p>
        <EmailLink />
      </div>
      <p>You can also find me at: </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
