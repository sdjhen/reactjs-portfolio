import React from 'react';

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-nav">
        <a class="navbar-brand" href="#">
          <span>
            <i class="fa-sharp fa-solid fa-s"></i>
          </span>
          <span>
            <i class="fa-solid fa-h"></i>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav custom-nav">
            <a class="nav-link" href="#projects">
              Projects
            </a>
            <a class="nav-link" href="#skills">
              Skills
            </a>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
