import React from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          SSP HOTELS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            {user ? (
              <>
                {/* <h1>{user.name}</h1> */}
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i> {user.name}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="/profile">
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/logout" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <a class="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}
            {/* <li class="nav-item">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
