import React from 'react';
import './main.scss';
const Main = () => {
  return (
    <main>
      <section className="section--hardskills" id="skills">
        <h2>I am most familiar with</h2>
        <ul>
          <li>
            <img
              src="/portfolio-react/img/css-3-svgrepo-com.svg"
              alt="css logo"
            />
          </li>
          <li>
            <img
              src="/portfolio-react/img/html-5-svgrepo-com.svg"
              alt="html logo"
            />
          </li>
          <li>
            <img
              src="/portfolio-react/img/javascript-svgrepo-com.svg"
              alt="javascript logo"
            />
          </li>
          <li>
            <img
              src="/portfolio-react/img/react-javascript-js-framework-facebook-svgrepo-com.svg"
              alt="react logo"
            />
          </li>
        </ul>
      </section>
      <section className="section--services" id="services">
        <h2>My services</h2>
        <ul>
          <li className="card mb-3" style={{ width: 30 + 'rem' }}>
            <div className="row g-0">
              <div className="col-md-4 img-wrapper">
                <img
                  src="/portfolio-react/img/coding-svgrepo-com.svg"
                  className="img-fluid rounded-start"
                  alt="a coding symbol"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Programming</h5>
                  <p className="card-text">
                    I am able to provide both <b>frontend</b> and <b>backend</b>{' '}
                    programming and the inbetween <b>api controllers</b> wether
                    it being RESTFUL api's or Graphql.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="card mb-3" style={{ width: 30 + 'rem' }}>
            <div className="row g-0">
              <div className="col-md-4 img-wrapper">
                <img
                  src="/portfolio-react/img/repair-costs-svgrepo.svg"
                  className="img-fluid rounded-start"
                  alt="a coding symbol"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Testing</h5>
                  <p className="card-text">
                    I can provide <b>testing</b> for applications to minimize the amount of bugs and allowing the user to have a <b>bug-free experience</b>.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="card mb-3" style={{ width: 30 + 'rem' }}>
            <div className="row g-0">
              <div className="col-md-4 img-wrapper">
                <img
                  src="/portfolio-react/img/ux-line-circle-svgrepo-com.svg"
                  className="img-fluid rounded-start"
                  alt="a coding symbol"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">UX Design</h5>
                  <p className="card-text">
                    I am well educated on <b>User Experience Design</b>, which helps me make decisions as if I was the user. This allows users to have <b>a fun experience</b> while browsing the web.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="card mb-3" style={{ width: 30 + 'rem' }}>
            <div className="row g-0">
              <div className="col-md-4 img-wrapper">
                <img
                  src="/portfolio-react/img/rule-svgrepo-com.svg"
                  className="img-fluid rounded-start"
                  alt="a coding symbol"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Convenience</h5>
                  <p className="card-text">
                    It is of utmost importance to work as a team which requires <b>readable code</b>. I am trained to apply easy to <b>understand naming conventions</b> such as the BEM-notation and <b>seperate code</b> frequently in different files.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="section--projects" id="projects">
        <h2>Projects I have worked on</h2>
        <ul>
          <li className="card" style={{ width: 18 + 'rem' }}>
            <a href="https://pgmgent-atwork-1.github.io/opdracht-1-schrauwen-groen-pgm-mardoekthienpondt/">
              <img
                src="/portfolio-react/img/schrauwen-groen.PNG"
                className="card-img-top"
                alt="Schrauwen Groen website logo"
              />
            </a>
            <div className="card-body">
              <p className="card-text">Website Schrauwen Groen</p>
              <span className="subjectName">@work1</span>
            </div>
          </li>
          <li className="card" style={{ width: 18 + 'rem' }}>
            <a href="https://www.pgm.gent/atwork1-gentse-feesten-2022/nl.html">
              <img
                src="/portfolio-react/img/gentse-feesten.PNG"
                className="card-img-top"
                alt="Gentse Feesten logo"
              />
            </a>
            <div className="card-body">
              <p className="card-text">Website Gentse Feesten</p>
              <span className="subjectName">@work1</span>
            </div>
          </li>
          <li className="card" style={{ width: 18 + 'rem' }}>
            <a href="https://www.pgm.gent/atwork1-gentse-feesten-2022/nl.html">
              <img
                src="/portfolio-react/img/she-code-africa.jpg"
                className="card-img-top"
                alt="She Code Africa logo"
              />
            </a>
            <div className="card-body">
              <p className="card-text">Website She Code Africa</p>
              <span className="subjectName">Webdesign</span>
            </div>
          </li>
          <li className="card" style={{ width: 18 + 'rem' }}>
            <a href="https://www.abap.be/parkieten-revue-b-v-p/">
              <img
                src="/portfolio-react/img/abap.png"
                className="card-img-top"
                alt="ABAP logo"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Application design for ABAP (Parakeets and Parrots)
              </p>
              <span className="subjectName">@work2</span>
            </div>
          </li>
          <li className="card" style={{ width: 18 + 'rem' }}>
            <a href="https://www.sos112.be/">
              <img
                src="/portfolio-react/img/noodcentrale.png"
                className="card-img-top"
                alt="Noodcentrale 112 logo"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Review & Feedback applicatie voor Noodcentrale
              </p>
              <span className="subjectName">@work2</span>
            </div>
          </li>
          <li className="card" style={{ width: 18 + 'rem' }}>
            <a href="https://www.twitch.tv/">
              <img
                src="/portfolio-react/img/twitch.webp"
                className="card-img-top"
                alt="Twitch logo"
              />
            </a>
            <div className="card-body">
              <p className="card-text">A Twitch Application</p>
              <span className="subjectName">Programming 3</span>
            </div>
          </li>
        </ul>
      </section>
      <section className="section--future" id="future">
        <h2>What do I want to do later?</h2>
        <div>
          <p>
            I would love to excel enough at programming to a point where I can
            deliver meaningful work from remote locations. I would love to
            combine work with traveling and to pursue my love for chess by
            playing tournaments over the world.
          </p>
          <img
            src="/portfolio-react/img/me-chess.JPG"
            alt="Myself playing a game of chess"
          />
        </div>
      </section>
      
    </main>
  );
};

export default Main;
