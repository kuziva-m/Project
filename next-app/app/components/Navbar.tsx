import Link from "next/link";
import "../globals.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Navbar brand (logo or name) */}
        <Link href="/" className="navbar-brand">
          <Image
            src="/logo.jpg" // Path to your logo image
            alt="Zim Tour Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            layout="intrinsic"
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            {/* Dropdown for tourist attractions */}
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Attractions
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/nav/chi-caves" className="dropdown-item ">
                    Chinhoyi Caves
                  </Link>
                </li>
                <li>
                  <Link href="/nav/grt-zim" className="dropdown-item">
                    Great Zimbabwe
                  </Link>
                </li>
                <li>
                  <Link href="/nav/hwange" className="dropdown-item">
                    Hwange National Park
                  </Link>
                </li>
                <li>
                  <Link href="/nav/lk-kariba" className="dropdown-item">
                    Lake Kariba
                  </Link>
                </li>
                <li>
                  <Link href="/nav/mt-nyangani" className="dropdown-item">
                    Mount Nyangani
                  </Link>
                </li>
                <li>
                  <Link href="/nav/vic-falls" className="dropdown-item">
                    Victoria Falls
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown for Things to Do */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="thingsToDoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Things to Do
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="thingsToDoDropdown"
              >
                <li>
                  <Link href="/nav/safari" className="dropdown-item">
                    Safari Tours
                  </Link>
                </li>

                <li>
                  <Link href="/nav/cultural-tours" className="dropdown-item">
                    Cultural Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nav/adventure-activities"
                    className="dropdown-item"
                  >
                    Adventure Activities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nav/wildlife-experiences"
                    className="dropdown-item"
                  >
                    Wildlife Experiences
                  </Link>
                </li>
              </ul>
            </li>

            {/* Login/Signup links */}
            <li className="nav-item">
              <Link href="/nav/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nav/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>

          {/* Language dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-light"
              href="#"
              id="languageDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </a>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <a href="#" className="dropdown-item">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  French
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Spanish
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Portuguese
                </a>
              </li>
            </ul>
          </li>

          {/* Search bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn"
              style={{ backgroundColor: "black", color: "white" }} // Change 'black' to your desired color
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
