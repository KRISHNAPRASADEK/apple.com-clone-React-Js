import React from "react";
import "./Ipadhome.css";
import ipadpro from "../../assets/Ipad/ipadpro.svg";
import ipadair from "../../assets/Ipad/ipadair.svg";
import ipad from "../../assets/Ipad/ipad.svg";
import ipadmini from "../../assets/Ipad/ipadmini.svg";
import ipadcomp from "../../assets/Ipad/ipadcomp.svg";
import applepencil from "../../assets/Ipad/applepencil.svg";
import keyboard from "../../assets/Ipad/keyboard.svg";
import airpod from "../../assets/Ipad/airpods.svg";
import ipadacc from "../../assets/Ipad/ipadacc.svg";
import ipados from "../../assets/Ipad/ipados.svg";
import Link from "@material-ui/core/Link";
import ipadprohero from "../../assets/Ipad/ipadprohero4.jpg";
import ipadairhero from "../../assets/Ipad/ipadair.jpg";
import ipad102 from "../../assets/Ipad/ipad102.jpg";
import ipadmini2 from "../../assets/Ipad/ipadmini.jpg";
import smallipadmini from "../../assets/Ipad/smallipadmini2.jpg";
import compareipadpro from "../../assets/Ipad/compareipadpro.png";
import ipadproswatches from "../../assets/Ipad/ipadproswatches.jpg";
import compareipadairlarge from "../../assets/Ipad/compareipadairlarge.png";
import compareipadairswatches from "../../assets/Ipad/compareipadairswatches.jpg";
import compareipad102 from "../../assets/Ipad/compareipad102.png";
import compareipad102swatches from "../../assets/Ipad/compareipad102swatches.jpg";
import compareipadmini from "../../assets/Ipad/compareipadmini.png";
import comparem1chip from "../../assets/Ipad/comparem1chip.png";
import comparea14chip from "../../assets/Ipad/comparea14chip.png";
import comparea12chip from "../../assets/Ipad/comparea12chip.png";
import compareusbc from "../../assets/Ipad/compareusbc.png";
import compareusbc2 from "../../assets/Ipad/compareusbc2.png";
import comparelightning from "../../assets/Ipad/comparelightning.png";
import comparecellular5g from "../../assets/Ipad/comparecellular5g.png";
import comparecellular4g from "../../assets/Ipad/comparecellular4g.png";
import comparepencil2 from "../../assets/Ipad/comparepencil2.png";
import comparemagickeyboard from "../../assets/Ipad/comparemagickeyboard.png";
import comparesmartkeyboard from "../../assets/Ipad/comparesmartkeyboard.png";
import comparebluetoothkeyboard from "../../assets/Ipad/comparebluetoothkeyboard.png";

export default function Ipadmedium() {
  return (
    <>
      <div class="uk-visible@s  uk-hidden@m ">
        <div class="ipadheadbackground-am" style={{ paddingBottom: "0%" }}>
          <div
            class="uk-position-relative uk-visible-toggle uk-light"
            tabindex="-1"
            uk-slider="sets: true"
          >
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
              <li>
                <Link href="#" class="linkclass">
                  <img
                    src={ipadpro}
                    alt=""
                    class="headipadpro-am "
                    style={{ marginTop: "10%", marginLeft: "12%" }}
                  />
                  <p
                    class="ipadprocap-am"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginLeft: "12%",
                      marginTop: "1.5%",
                    }}
                  >
                    iPad Pro
                  </p>
                  <p
                    class="ipadpronewcap-am"
                    style={{
                      color: "#f56300",
                      marginLeft: "15.8%",
                      marginTop: "0%",
                      fontSize: "55%",
                    }}
                  >
                    New
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" class="linkclass">
                  <img
                    src={ipadair}
                    alt=""
                    class="headipadair-am "
                    style={{ marginLeft: "-63%", marginTop: "10%" }}
                  />
                  <p
                    class="ipadprocap-am"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginLeft: "-64.3%",
                      marginTop: "1.5%",
                    }}
                  >
                    iPad Air
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" class="linkclass">
                  <img
                    src={ipad}
                    alt=""
                    class="headipadair-am "
                    style={{ marginLeft: "-140%", marginTop: "10%" }}
                  />
                  <p
                    class="ipadprocap-am"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginLeft: "-139.4%",
                      marginTop: "1.5%",
                    }}
                  >
                    iPad
                  </p>
                </Link>
              </li>
              <li>
                <img
                  src={ipadmini}
                  alt=""
                  class="headipadair-am "
                  style={{ marginLeft: "-217%", marginTop: "9.5%" }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-219%",
                    marginTop: "2%",
                  }}
                >
                  iPad mini
                </p>
              </li>
              <li>
                <img
                  src={ipadcomp}
                  alt=""
                  class="headipadair-am "
                  style={{ marginLeft: "-294%", marginTop: "11.9%" }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-296%",
                    marginTop: "-0.5%",
                  }}
                >
                  compare
                </p>
              </li>
              <li>
                <img
                  src={applepencil}
                  alt=""
                  class="headipadair-am "
                  style={{ marginLeft: "-369%", marginTop: "9.5%" }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-374%",
                    marginTop: "2%",
                  }}
                >
                  Apple pencil
                </p>
              </li>
              <li>
                <img
                  src={keyboard}
                  alt=""
                  class="headipadair-am "
                  style={{
                    marginLeft: "-447%",
                    marginTop: "8.5%",
                    width: "65px",
                    height: "54px",
                  }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-443%",
                    marginTop: "3%",
                  }}
                >
                  Keyboard
                </p>
                <p
                  class="ipadpronewcap-am"
                  style={{
                    color: "#f56300",
                    marginLeft: "-438%",
                    marginTop: "0%",
                    fontSize: "55%",
                  }}
                >
                  New
                </p>
              </li>
              <li>
                <img
                  src={airpod}
                  alt=""
                  class="headipadair-am "
                  style={{
                    marginLeft: "-517%",
                    marginTop: "8%",
                    width: "27px",
                    height: "54px",
                  }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-518%",
                    marginTop: "3.5%",
                  }}
                >
                  Airpod
                </p>
              </li>
              <li>
                <img
                  src={ipadacc}
                  alt=""
                  class="headipadair-am "
                  style={{
                    marginLeft: "-589%",
                    marginTop: "8.5%",
                    width: "31px",
                    height: "54px",
                  }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-593%",
                    marginTop: "1%",
                  }}
                >
                  Accessories
                </p>
              </li>
              <li>
                <img
                  src={ipados}
                  alt=""
                  class="headipadair-am "
                  style={{
                    marginLeft: "-662%",
                    marginTop: "9%",
                    width: "33px",
                    height: "54px",
                  }}
                />
                <p
                  class="ipadprocap-am"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "-663%",
                    marginTop: "1%",
                  }}
                >
                  iPadOS
                </p>
              </li>
            </ul>
            <a
              class="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous="true"
              uk-slider-item="previous"
              style={{ color: "black", width: "8px" }}
            ></a>
            <a
              class="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next="true"
              uk-slider-item="next"
              style={{ color: "black", width: "8px" }}
            ></a>
          </div>
        </div>
        <div style={{ marginTop: "7%" }}>
          <h2
            class="ipadnewclass-am"
            style={{ marginLeft: "4%", marginTop: "24%" }}
          >
            New
          </h2>
          <h2
            class="ipadproclass-am"
            style={{ marginLeft: "4%", marginTop: "-5%", fontSize: "48px" }}
          >
            iPad Pro
          </h2>
          <p
            class="experienceclass-am"
            style={{ marginLeft: "4%", marginTop: "-5%", fontSize: "21px" }}
          >
            The ultimate <br />
            iPad Experience{" "}
          </p>
          <p class="ipadpropriceclass-am" style={{ marginLeft: "5%" }}>
            From $799
          </p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-81%", marginTop: "-2%" }}
            >
              Buy
            </button>
          </p>
        </div>

        <div>
          <img
            src={ipadprohero}
            alt=""
            class="ipadprohero-am"
            style={{ width: "537px", height: "430px", marginTop: "-46%" }}
          />
        </div>

        <div>
          <img
            src={ipadairhero}
            alt=""
            class="ipadairhero-am"
            style={{
              width: "387px",
              height: "462px",
              marginTop: "16%",
              marginLeft: "6%",
            }}
          />
        </div>
        <div style={{ marginLeft: "57%", marginTop: "-34%" }}>
          <h2
            class="ipadproclass-am"
            style={{ marginLeft: "37%", marginTop: "-109%", fontSize: "48px" }}
          >
            iPad Air
          </h2>
          <p
            class="experienceclass-am"
            style={{ marginLeft: "38%", marginTop: "-10%", fontSize: "21px" }}
          >
            Powerful. Colorful.
            <br />
            Wonderful.{" "}
          </p>
          <p
            class="ipadpropriceclass-am"
            style={{ marginLeft: "38%", marginTop: "9%" }}
          >
            From $599
          </p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-3%", marginTop: "-4%" }}
            >
              Buy
            </button>
          </p>
        </div>

        <div>
          <img
            src={ipad102}
            alt=""
            class="ipada102-am"
            style={{
              marginLeft: "24%",
              marginTop: "34%",
              width: "585px",
              height: "350px",
            }}
          />
        </div>
        <div style={{ marginLeft: "-5%", marginTop: "-43%" }}>
          <h2
            class="ipadproclass-am"
            style={{ marginLeft: "9%", marginTop: "-5%", fontSize: "48px" }}
          >
            iPad
          </h2>
          <p
            class="experienceclass-am"
            style={{ marginLeft: "9%", marginTop: "-5%", fontSize: "21px" }}
          >
            Delightfully capable.
            <br />
            Surprisingly affordable.{" "}
          </p>
          <p
            class="ipadpropriceclass-am"
            style={{ marginLeft: "9%", marginTop: "4%" }}
          >
            From $329
          </p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-72%", marginTop: "-1%" }}
            >
              Buy
            </button>
          </p>
        </div>
        <div>
          <img
            src={ipadmini2}
            alt=""
            class="ipadmini-am"
            style={{
              marginLeft: "7%",
              marginTop: "19%",
              width: "455px",
              height: "378px",
            }}
          />
        </div>
        <div style={{ marginLeft: "57%", marginTop: "-34%" }}>
          <h2
            class="ipadproclass-am"
            style={{ marginLeft: "19%", marginTop: "-102%", fontSize: "48px" }}
          >
            iPad mini
          </h2>
          <p
            class="experienceclass-am"
            style={{ marginTop: "-12%", marginLeft: "19%", fontSize: "21px" }}
          >
            Small in size.
            <br />
            Big on capability.{" "}
          </p>
          <p
            class="ipadpropriceclass-am"
            style={{ marginTop: "9%", marginLeft: "20%" }}
          >
            From $399
          </p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-37%", marginTop: "-2%" }}
            >
              Buy
            </button>
          </p>
        </div>

        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-width-1-2@m"
            style={{
              marginTop: "13%",
              width: "100%",
              backgroundColor: "lavender",
            }}
          >
            <div
              class="uk-card uk-card-default uk-card-body uk-width-1-2@m"
              style={{
                marginTop: "-1%",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <h2
                class="cardtitle-am uk-card-title"
                style={{ fontSize: "48px" }}
              >
                Which iPad is
                <br /> right for you?
              </h2>
              <div>
                <img
                  src={compareipadpro}
                  alt=""
                  class="compareipadpro-am"
                  style={{
                    marginLeft: "14%",
                    marginTop: "16%",
                    width: "189px",
                    height: "214px",
                  }}
                />
                <p
                  class="ipadpronewcap-am"
                  style={{
                    color: "#f56300",
                    marginLeft: "26.8%",
                    marginTop: "1%",
                    fontSize: "83%",
                  }}
                >
                  New
                </p>
                <h3
                  class="webipadpro-am"
                  style={{ marginLeft: "22%", marginTop: "-2%" }}
                >
                  iPad Pro
                </h3>
                <p
                  class="webipadproprice-am"
                  style={{ marginLeft: "24%", marginTop: "-2.5%" }}
                >
                  From $799
                </p>
                <img
                  src={ipadproswatches}
                  alt=""
                  class="ipadproswatches-am"
                  style={{ marginLeft: "26%", marginTop: "-5%" }}
                />
                <p class="webipadprobutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="webipadprobutton1-am uk-button uk-button-primary"
                    style={{ marginLeft: "-41%", marginTop: "-4%" }}
                  >
                    Buy
                  </button>
                </p>
              </div>
              <div style={{ marginLeft: "26%", marginTop: "-38%" }}>
                <img
                  src={compareipadairlarge}
                  alt=""
                  class="compareipadairlarge-am"
                  style={{
                    marginLeft: "54%",
                    marginTop: "-28%",
                    width: "136px",
                    height: "188px",
                  }}
                ></img>
                <h3
                  class="webipadpro-am"
                  style={{ marginTop: "6%", marginLeft: "59%" }}
                >
                  iPad Air
                </h3>
                <p
                  class="webipadproprice-am"
                  style={{ marginTop: "-3.1%", marginLeft: "61%" }}
                >
                  From $599
                </p>
                <img
                  src={compareipadairswatches}
                  alt=""
                  class="compareipadairswatches-am"
                  style={{ marginLeft: "56%", marginTop: "-8%" }}
                />
                <p class="webipadprobutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="webipadprobutton1-am uk-button uk-button-primary"
                    style={{ marginLeft: "37%", marginTop: "-4%" }}
                  >
                    Buy
                  </button>
                </p>
              </div>
              <div>
                <hr
                  class="webhrclass1"
                  style={{
                    marginLeft: "10%",
                    width: "37%",
                    marginTop: "3%",
                    borderBottom: "1px solid",
                  }}
                />
                <hr
                  class="webhrclass2"
                  style={{
                    marginLeft: "61%",
                    width: "32%",
                    marginTop: "-3%",
                    borderBottom: "1px solid",
                  }}
                />
              </div>
              <div>
                <p
                  class="webcomparegridhead1-am"
                  style={{
                    marginLeft: "19%",
                    marginTop: "7%",
                    fontSize: "20px",
                  }}
                >
                  12.9” and 11”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{
                    marginLeft: "14%",
                    marginTop: "-2%",
                    fontSize: "14px",
                  }}
                >
                  12.9” Liquid Retina XDR display<sup>1</sup>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11” Liquid Retinadisplay
                  <sup>1</sup>
                </p>

                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "74%", marginTop: "-13.5%" }}
                >
                  10.9”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "56.5%", marginTop: "-2%" }}
                >
                  Liquid Retina display<sup>1</sup>
                </p>
              </div>
              <div>
                <img
                  src={comparem1chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "26%", marginTop: "6%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "25.5%", marginTop: "1.9%" }}
                >
                  M1 chip
                </p>

                <img
                  src={comparea14chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "74.7%", marginTop: "-27%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "70.7%", marginTop: "-10%" }}
                >
                  A14 Bionic chip
                </p>
              </div>
              <div>
                <img
                  src={compareusbc}
                  alt=""
                  class="compareusbc-am"
                  style={{ marginLeft: "24%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "15%", marginTop: "1%" }}
                >
                  USB-C connectorwith support
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for Thunderbolt /
                  USB 4
                </p>

                <img
                  src={compareusbc2}
                  alt=""
                  class="compareusbc2-am"
                  style={{ marginLeft: "76%", marginTop: "-28.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "70.8%", marginTop: "-13%" }}
                >
                  USB-C connector
                </p>
              </div>
              <div>
                <img
                  src={comparecellular5g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "25%", marginTop: "7%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "23%", marginTop: "1%" }}
                >
                  5G cellular<sup>2</sup>
                </p>

                <img
                  src={comparecellular4g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "75%", marginTop: "-24%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "71%", marginTop: "-10.3%" }}
                >
                  4G LTE cellular<sup>2</sup>
                </p>
              </div>
              <div>
                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "23.5%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "21%", marginTop: "1.3%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "15%", marginTop: "-3.6%" }}
                >
                  Apple Pencil(2nd generation)
                </p>

                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "74.5%", marginTop: "-26%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72%", marginTop: "-12%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "65%", marginTop: "-3.7%" }}
                >
                  Apple Pencil (2nd generation){" "}
                </p>
              </div>
              <div>
                <img
                  src={comparemagickeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "23.5%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "21.3%", marginTop: "1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "19%", marginTop: "-3.6%" }}
                >
                  Magic Keyboard and
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "18.6%", marginTop: "-3.6%" }}
                >
                  Smart Keyboard Folio
                </p>

                <img
                  src={comparemagickeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "74.5%", marginTop: "-36.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.3%", marginTop: "-15%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "70%", marginTop: "-3.6%" }}
                >
                  Magic Keyboard and
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "69.6%", marginTop: "-3.6%" }}
                >
                  Smart Keyboard Folio
                </p>
              </div>
              <div>
                <hr
                  class="webhrclasslast1"
                  style={{
                    marginLeft: "12%",
                    width: "37%",
                    marginTop: "7%",
                    borderBottom: "1px solid",
                  }}
                ></hr>
                <hr
                  class="webhrclasslast2"
                  style={{
                    marginLeft: "61%",
                    width: "35%",
                    marginTop: "-3.5%",
                    borderBottom: "1px solid",
                  }}
                ></hr>
              </div>
              <div>
                <img
                  src={compareipad102}
                  alt=""
                  class="compareipad102-am"
                  style={{
                    marginLeft: "19%",
                    marginTop: "21%",
                    width: "133px",
                    height: "191px",
                  }}
                />
                <h3
                  class="webipadpro-am"
                  style={{
                    marginTop: "7%",
                    marginLeft: "25%",
                    fontSize: "24px",
                  }}
                >
                  iPad
                </h3>
                <p
                  class="webipadproprice-am"
                  style={{
                    marginLeft: "24%",
                    marginTop: "-3%",
                    fontSize: "14px",
                  }}
                >
                  From $329
                </p>
                <img
                  src={compareipad102swatches}
                  alt=""
                  class="compareipad102swatches-am"
                  style={{ marginLeft: "24%", marginTop: "-5%" }}
                />
                <p class="webipadprobutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="webipadprobutton1-am uk-button uk-button-primary"
                    style={{ marginLeft: "-41%", marginTop: "-1%" }}
                  >
                    Buy
                  </button>
                </p>
              </div>
              <div>
                <img
                  src={compareipadmini}
                  alt=""
                  class="compareipadmini-am"
                  style={{
                    marginLeft: "70%",
                    marginTop: "-92%",
                    width: "104px",
                    height: "155px",
                  }}
                />
                <h3
                  class="webipadpro-am"
                  style={{
                    marginTop: "-28%",
                    marginLeft: "69%",
                    fontSize: "24px",
                  }}
                >
                  iPad mini
                </h3>
                <p
                  class="webipadproprice-am"
                  style={{
                    marginLeft: "73%",
                    marginTop: "-2.5%",
                    fontSize: "14px",
                  }}
                >
                  From $329
                </p>
                <img
                  src={compareipad102swatches}
                  alt=""
                  class="compareipad102swatches-am"
                  style={{ marginLeft: "73%", marginTop: "-5%" }}
                />
                <p class="webipadprobutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="webipadprobutton1-am uk-button uk-button-primary"
                    style={{ marginLeft: "57%", marginTop: "-1%" }}
                  >
                    Buy
                  </button>
                </p>
              </div>
              <div>
                <hr
                  class="webhrclass1"
                  style={{
                    marginLeft: "12%",
                    width: "37%",
                    marginTop: "7%",
                    borderBottom: "1px solid",
                  }}
                />
                <hr
                  class="webhrclass2"
                  style={{
                    marginLeft: "61%",
                    width: "35%",
                    marginTop: "-3.5%",
                    borderBottom: "1px solid",
                  }}
                />
              </div>
              <div>
                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "27%", marginTop: "10.7%" }}
                >
                  10.2”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "23.5%", marginTop: "-2%" }}
                >
                  Retina display
                </p>

                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "77%", marginTop: "-10.8%" }}
                >
                  7.9”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.6%", marginTop: "-2%" }}
                >
                  Retina display
                </p>
              </div>
              <div>
                <img
                  src={comparea12chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "27.5%", marginTop: "2.9%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "23.5%", marginTop: "1.6%" }}
                >
                  A12 Bionic chip
                </p>

                <img
                  src={comparea12chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "76.5%", marginTop: "-25%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.3%", marginTop: "-9.5%" }}
                >
                  A12 Bionic chip
                </p>
              </div>
              <div>
                <img
                  src={comparelightning}
                  alt=""
                  class="compareusbc2-am"
                  style={{ marginLeft: "28%", marginTop: "1.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "22.4%", marginTop: "0.5%" }}
                >
                  Lightning connector
                </p>

                <img
                  src={comparelightning}
                  alt=""
                  class="compareusbc2-am"
                  style={{ marginLeft: "78%", marginTop: "-20.9%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "70.4%", marginTop: "-9.5%" }}
                >
                  Lightning connector
                </p>
              </div>
              <div>
                <img
                  src={comparecellular4g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "27%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "23%", marginTop: "1.7%" }}
                >
                  4G LTE cellular<sup>2</sup>
                </p>

                <img
                  src={comparecellular4g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "77%", marginTop: "-26%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "73%", marginTop: "-10%" }}
                >
                  4G LTE cellular<sup>2</sup>
                </p>
              </div>
              <div>
                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "26.5%", marginTop: "4%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "24%", marginTop: "1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "18%", marginTop: "-3.7%" }}
                >
                  Apple Pencil(1st generation){" "}
                </p>

                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "76.5%", marginTop: "-24%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "74%", marginTop: "-12%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "66%", marginTop: "-3.7%" }}
                >
                  Apple Pencil (1st generation)
                </p>
              </div>
              <div>
                <img
                  src={comparesmartkeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "26.5%", marginTop: "1.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "15.3%", marginTop: "-0.1%" }}
                >
                  Compatible with Smart Keyboard{" "}
                </p>

                <img
                  src={comparebluetoothkeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "76.5%", marginTop: "-22.6%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "74.3%", marginTop: "-9.1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.2%", marginTop: "-3.6%" }}
                >
                  Bluetooth keyboards
                </p>
              </div>
              <div>
                <hr
                  class="webhrclasslast3"
                  style={{
                    marginLeft: "12%",
                    width: "37%",
                    marginTop: "7%",
                    borderBottom: "1px solid",
                  }}
                ></hr>
                <hr
                  class="webhrclasslast3"
                  style={{
                    marginLeft: "65%",
                    width: "33%",
                    marginTop: "-3.5%",
                    borderBottom: "1px solid",
                  }}
                ></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
