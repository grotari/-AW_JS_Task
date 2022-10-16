import React from 'react';

export const NavBar = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="wrapper-fluid wrapper-navbar sticky-navbar" id="wrapper-navbar"
      itemScope="" itemType="http://schema.org/WebSite">
      <a className="skip-link screen-reader-text sr-only" href="#content">Skip to content</a>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Your site title as branding in the menu */}
          <a href="/" className="navbar-brand custom-logo-link" rel="home" itemProp="url">
            <img src="../dist/fundament/images/fundament_logo.svg" className="img-fluid" alt="MMP" itemProp="MMP" />
          </a>
          {/* end custom logo */}
          <a className="navbar-brand site-title-with-logo" rel="home" href="/" title="MMP" itemProp="url">
            MMP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown">
            {/* Your menu goes here */}
            <ul id="main-menu" className="navbar-nav">
              <li className="nav-item active">
                <a title="Home" href="/" className="nav-link ">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >About<span className="caret"></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/info/about-the-project/">
                    About the project
                  </a>
                  <a className="dropdown-item" href="/info/project-team/">
                    Team
                  </a>
                  <a className="dropdown-item" href="/data-model">
                    Data Model
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/acdh-oeaw/mmp">
                    Code Repo
                  </a>
                  <a className="dropdown-item" href="/imprint">
                    Imprint | Impressum
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >API<span className="caret"></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/api">API</a>
                  <a className="dropdown-item" href="/api-docs">API-Docs</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">Browse/Explore Data<span className="caret"></span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/archiv/keyword/">
                    Keyword
                  </a>
                  <a className="dropdown-item" href="/archiv/stelle/">
                    Stelle
                  </a>
                  <a className="dropdown-item" href="/archiv/text/">
                    Text
                  </a>
                  <a className="dropdown-item" href="/archiv/ort/">
                    Ort
                  </a>
                  <a className="dropdown-item" href="/archiv/autor/">
                    Autor
                  </a>
                  <a className="dropdown-item" href="/archiv/spatialcoverage/">
                    Spatialcoverage
                  </a>
                  <a className="dropdown-item" href="/archiv/usecase/">
                    Usecase
                  </a>
                  <a className="dropdown-item" href="/archiv/event/">
                    Event
                  </a>
                  <div className="dropdown-divider" />
                </div>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0 navbar-search-form"
              method="get"
              action="/"
              role="search"
            >
              <input
                className="form-control navbar-search"
                id="s"
                name="s"
                type="text"
                placeholder="Search"
                defaultValue=""
                autoComplete="off"
              />
              <button type="submit" className="navbar-search-icon">
                <i data-feather="search" />
              </button>
            </form>
          </div>
          {/* .collapse navbar-collapse */}
        </div>
        {/* .container */}
      </nav>
      {/* .site-navigation */}
    </div>
  );
};
