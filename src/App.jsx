import { Moon, Menu, ArrowUpRight, Github, Paperclip } from "lucide-react";
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
              <a href="/CV_Ridoseptiawan.pdf" className="nav__link">
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

          <a
            href="https://github.com/riddsep"
            className="btn btn--secondary hero__button"
            target="_blank"
          >
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
                  <a
                    href="https://github.com/riddsep/chill-movieapp.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a href="https://chill-movieapp.vercel.app/" target="_blank">
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Geminix</h3>
                  <p>React, CSS</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/geminix.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a href="https://geminix-wine.vercel.app/" target="_blank">
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Todolist</h3>
                  <p>HTML, CSS, Javascript</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/todolist-app.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://todolist-mission.vercel.app/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div
                className="project__info"
                href="https://v1-blackjack-game.vercel.app/"
              >
                <div className="project__bio">
                  <h3>Blackjack</h3>
                  <p>HTML, CSS, Javascript</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/blackjack-game.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://v1-blackjack-game.vercel.app/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
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
                  <a
                    href="https://github.com/riddsep/rock-paper-scissors.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://riddsep.github.io/rock-paper-scissors/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Jobless</h3>
                  <p>HTML, CSS</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/jobless.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a href="https://v1-jobless.vercel.app/" target="_blank">
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Feature Section</h3>
                  <p>HTML, SASS</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/four-card-feature-section.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://riddsep.github.io/four-card-feature-section/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Card Component</h3>
                  <p>HTML, SASS</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/Product-preview-card-component.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://riddsep.github.io/Product-preview-card-component/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Recette</h3>
                  <p>HTML, CSS</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/recipes-page.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://riddsep.github.io/recipes-page/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__info">
                <div className="project__bio">
                  <h3>Testimonial</h3>
                  <p>HTML, CSS</p>
                </div>
                <div className="project__link">
                  <a
                    href="https://github.com/riddsep/testimonials-grid-section-main.git"
                    target="_blank"
                  >
                    <Github color={"#ffffff"} />
                  </a>
                  <a
                    href="https://riddsep.github.io/testimonials-grid-section-main/"
                    target="_blank"
                  >
                    <Paperclip color={"#ffffff"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer" id="footer">
        <div className="footer__container">
          <a href="mailto:ridoseptiawan00@gmail.com" className="footer__email">
            ridoseptiawan00@gmail.com
          </a>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/ridoseptiawan/"
              target="_blank"
              className="footer__social-link"
            >
              <img
                src="./assets/linkedin-icon.svg"
                alt="Linkedin"
                className="footer__social-icon"
              />
            </a>
            <a
              href="https://github.com/riddsep"
              target="_blank"
              className="footer__social-link"
            >
              <img
                src="./assets/github-icon.svg"
                alt="GitHub"
                className="footer__social-icon"
              />
            </a>
          </div>

          <p className="footer__copyright">
            Copyright &copy; ridoseptiawan <span id="datee"></span>, All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
