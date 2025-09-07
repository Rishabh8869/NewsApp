import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              NewsApp
            </NavLink>

            {/* Toggler button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu - conditionally shown */}
            <div
              className={`collapse navbar-collapse ${
                this.state.isOpen ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/business"
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/general"
                  >
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-white fw-bold" : ""}`
                    }
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
