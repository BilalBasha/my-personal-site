import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  // 'Courses',
  // 'References',
];

const downloadResume = (ev) => {
  let host = location.origin;
  host += '/my-personal-site';
  fetch(host+'/images/download/resume.pdf').then(res => res.blob() ).then(function(blob) { var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "Bilal resume.pdf";
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  
  });
}

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <div>
            <h2><Link to="/resume">Resume</Link></h2>
            <ul className="actions">
              <li>
                <a className="button" onClick={ ev => downloadResume(ev) }>download</a>
              </li>
            </ul>
          </div>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      {/*<Courses data={courses} />*/}
      {/*<References />*/}
    </article>
  </Main>
);

export default Resume;
