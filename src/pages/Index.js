import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={"Calvin Kuo's personal website. Senior System Engineering Manager at AT&T, "
    + 'M.Eng. from Cornell University and B.S. from Rutgers.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <h3>Calvin&apos;s small corner of the Internet</h3>
          <p>
            A beautiful, responsive, statically-generated,
            React website written with modern Javascript.
          </p>
        </div>
      </header>
      <center>
        <img src={`${PUBLIC_URL}/images/CalvinBalloonsMod.png`} width={170} height={220} alt="" />
        <br /> <br />
      </center>
      <p>
        Greetings!
        My name is Calvin Kuo and I am thrilled to welcome you to my personal website!
        My website is a reflection of some passions, pursuits, and adventures that make up my life.
        Whether you stumbled upon this space intentionally or serendipitously,
        I hope you will find something captivating and inspiring during your visit.
      </p>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can learn more about me by checking out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or view <Link to="/stats">site statistics</Link>.
        You can view the source code for my website <a href="https://github.com/calvin-kuo/calvinkuo">here</a>.
        This website contains a medley of elements that brings me joy and a platform
        to share my journey with the world. As you explore, you will discover glimpses of my
        creative endeavors and perhaps a sprinkle of travel tales from my wanderlust-filled
        escapades.
      </p>
      <p>
        My website is not just about me; it is about connecting with like-minded souls like you.
        Therefore, feel free to <Link to="/contact">contact</Link> me --I would love to hear from you!
        Thank you for stopping by and being a part of this digital voyage.
        Together, let us embrace the beauty of curiosity and the thrill of exploration.
        Happy browsing!
      </p>
    </article>
  </Main>
);

export default Index;
