import React from "react";

function LandingPage() {
  return (
    // <main>
    <div className="landingPage">
      <div className="container">
        {/* Navbar & Search Option */}
        <div className="row">
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand">EventGenie</a>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
