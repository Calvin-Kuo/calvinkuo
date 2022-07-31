import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Calvin Kuo's personal website. System Engineering Manager (Product Manager) at AT&T, "
    + 'M.Eng. at Cornell University, and Rutgers Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my personal website. My name is Calvin Kuo. Please feel free to read more <Link to="/about">about me</Link>,
        or you can learn more about me by checking out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> You can view the source code for my website <a href="https://github.com/calvin-kuo/calvinkuo">here</a>.</p>
    </article>
  </Main>
);

export default Index;
