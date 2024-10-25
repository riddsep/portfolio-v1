import { Moon, Menu } from "lucide-react";
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
              <a href="#" className="nav__link">
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
    </>
  );
}

export default App;
