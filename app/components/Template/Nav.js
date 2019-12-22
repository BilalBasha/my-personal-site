import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="Bilal Basha" />
      </Link>
      <header>
        <h2>Bilal BAsha</h2>
        <p><a href="mailto:rockingbilal96@gmail.com">rockingbilal96@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Bilal Basha M. I am a Engineer graduate, and web developer working in netaxis it solutions pvt ltd. I like to build dynamic fast web applications by using latest technology..
      </p>
      {/*---<ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>----*/}
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Bilal Basha M <Link to="/">bilalbasha.github.io/my-personal-site/</Link>.</p>
    </section>
  </section>
);

export default Nav;
