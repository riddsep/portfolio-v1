import { Moon, Menu, ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            <img src="/assets/logo.png" />
          </div>
          <ul className={`nav__list ${toggle ? "nav__list--active" : ""}`}>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Project
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
            <li className="nav__item btn btn--primary">
              <a href="#" className="nav__link">
                Resume
                <ArrowUpRight size={20} />
              </a>
            </li>
            <li className="nav__item">
              <Moon />
            </li>
          </ul>
          <Menu
            size={32}
            className="nav__hamburger"
            onClick={() => setToggle(!toggle)}
          />
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero__profile">
            <img
              src="/assets/profile.png"
              alt="Profile Image"
              className="hero__image"
            />
          </div>
          <h2 className="hero__greeting">Hi, I&apos;m Rido</h2>
          <div className="hero__headline">
            <h2>Learning and growing</h2>
            <h2>building my future in Frontend</h2>
          </div>
          <p className="hero__description">
            Informatics graduate, honing frontend skills, and seeking
            opportunities to kickstart my career.
          </p>

          <a href="#" className="btn btn--secondary hero__button">
            Connect with me
          </a>
        </section>
        <section className="projects" id="projects">
          <h2 className="projects__title">Projects</h2>
          <p className="projects__description">
            Explore my projects as I grow in frontend development.
          </p>

          <div className="projects__grid">
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Chill Movies</h3>
                  <p>React, Redux, Tailwind</p>
                </div>
                <div className="project__link">
                  <a href="#" target="_blank">
                    <Github color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Testimonial</h3>
                  <p>HTML, SASS</p>
                </div>
                <div className="project__link">
                  <a href="#" target="_blank">
                    <Github color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Card Feature Section</h3>
                  <p>HTML, SASS</p>
                </div>
                <div className="project__link">
                  <a href="#" target="_blank">
                    <Github color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Rock Paper Scissors</h3>
                  <p>HTML, CSS, Javascript</p>
                </div>
                <div className="project__link">
                  <a href="#" target="_blank">
                    <Github color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Project One</h3>
                  <p>React, Redux, SASS</p>
                </div>
                <div className="project__link">
                  <a href="#" target="_blank">
                    <Github color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Project One</h3>
                  <p>React, Redux, SASS</p>
                </div>
                <div className="project__link">
                  <a href="#" target="_blank">
                    <Github color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
