import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import bagsvg from "../../assets/header/bag.svg";
import favorsvg from "../../assets/header/favorites.svg";
import ordersvg from "../../assets/header/orders.svg";
import accountsvg from "../../assets/header/account.svg";
import signsvg from "../../assets/header/signIn.svg";

function Header() {
  const [hide1, setHide1] = useState();
  const [hide2, setHide2] = useState();
  const [hide3, setHide3] = useState();

  return (
    <>
      <div className="apple-header">
        <div className={hide2 ? "nav-container active" : "nav-container"}>
          <nav className={hide3 ? "move-up" : ""}>
            <ul className="mobile-nav">
              <li>
                <div
                  className="menu-icon-container"
                  onClick={() => setHide2(!hide2)}
                >
                  <div className="menu-icon">
                    <span className="line-1" />
                    <span className="line-2" />
                  </div>
                </div>
              </li>
              <li>
                <a href="# " className="link-logo">
                  {" "}
                </a>
              </li>
              <li className="uk-inline">
                <a
                  href
                  className="link-bag uk-button uk-button-default"
                  type="button"
                >
                  {" "}
                </a>

                <div data-uk-dropdown="mode: click" className="bagdropdown-am">
                  <p class="bagpara1-am">Your Bag is empty</p>
                  <hr style={{ marginTop: "6%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link href="# ">
                      <img src={bagsvg} alt="" class="bagsvg-am " />
                      &nbsp;Bag
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link href="# ">
                      <img src={favorsvg} alt="" class="bagsvg-am " />
                      &nbsp;Favorites
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link href="# ">
                      <img src={ordersvg} alt="" class="bagsvg-am " />
                      &nbsp;Orders
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="# ">
                      <img src={accountsvg} alt="" class="bagsvg-am " />
                      &nbsp;Account
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="/Signin">
                      <img src={signsvg} alt="" class="bagsvg-am " />
                      &nbsp;Sign in
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              className={
                hide1
                  ? "desktop-nav hide"
                  : "desktop-nav" && hide3
                  ? "desktop-nav move-down"
                  : "desktop-nav"
              }
              id="search1"
            >
              <li>
                <Link to="/" className="link-logo">
                  {" "}
                </Link>
              </li>
              <li>
                <a href="# ">Store</a>
              </li>
              <li>
                <Link to="/machome">Mac</Link>
              </li>
              <li>
                <Link to="/ipad">iPad</Link>
              </li>
              <li>
                <Link to="iphone12">iPhone</Link>
              </li>
              <li>
                <Link to="/watch">Watch</Link>
              </li>
              <li>
                <Link to="/tv">TV</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/Support">Support</Link>
              </li>
              <li>
                <a
                  href="# "
                  onClick={() => setHide1(true)}
                  className="link-search"
                >
                  {" "}
                </a>
              </li>

              <li className="uk-inline">
                <button
                  href="# "
                  className="link-bag uk-button uk-button-default"
                  type="button"
                >
                  {" "}
                </button>

                <div data-uk-dropdown="mode: click" className="bagdropdown-am">
                  <p class="bagpara1-am">Your Bag is empty</p>
                  <hr style={{ marginTop: "6%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="# ">
                      <img src={bagsvg} alt="" class="bagsvg-am " />
                      &nbsp;Bag
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="# ">
                      <img src={favorsvg} alt="" class="bagsvg-am " />
                      &nbsp;Favorites
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="# ">
                      <img src={ordersvg} alt="" class="bagsvg-am " />
                      &nbsp;Orders
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="# ">
                      <img src={accountsvg} alt="" class="bagsvg-am " />
                      &nbsp;Account
                    </Link>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <Link to="/Signin">
                      <img src={signsvg} alt="" class="bagsvg-am " />
                      &nbsp;Sign in
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          {/* End of navigation items */}
          <div
            className={hide1 ? "search-container" : "search-container hide"}
            id="search2"
          >
            <div className="link-search" />
            <div className="search-bar">
              <form action>
                <input type="text" placeholder="Search apple.com" />
              </form>
            </div>
            <div className="link-close" onClick={() => setHide1(false)} />
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="# ">Visiting an Apple Store FAQ</a>
                </li>
                <li>
                  <a href="# ">Shop Apple Store Online</a>
                </li>
                <li>
                  <a href="# ">Accessories</a>
                </li>
                <li>
                  <a href="# ">AirPods</a>
                </li>
                <li>
                  <a href="# ">AirTag</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-search-container">
            <div className="link-search" />
            <div className={hide3 ? "search-bar active" : "search-bar"}>
              <form action onClick={() => setHide3(true)}>
                <input type="text" placeholder="Search apple.com" />
              </form>
            </div>
            <span className="cancel-btn" onClick={() => setHide3(false)}>
              Cancel
            </span>
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="# ">Visiting an Apple Store FAQ</a>
                </li>
                <li>
                  <a href="# ">Shop Apple Store Online</a>
                </li>
                <li>
                  <a href="# ">Accessories</a>
                </li>
                <li>
                  <a href="# ">AirPods</a>
                </li>
                <li>
                  <a href="# ">AirTag</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={hide1 ? "overlay show" : "overlay"} />
      </div>
    </>
  );
}

export default Header;
