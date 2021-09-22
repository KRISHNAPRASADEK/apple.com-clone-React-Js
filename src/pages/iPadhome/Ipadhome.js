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
import ipadprohero from "../../assets/Ipad/ipadprohero2.jpg";
import ipadairhero from "../../assets/Ipad/ipadair.jpg";
import ipad102 from "../../assets/Ipad/ipad102.jpg";
import ipadmini2 from "../../assets/Ipad/ipadmini.jpg";
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
import Ipadsmall from "./Ipadsmall";
import Ipadmedium from "./Ipadmedium";

export default function Ipadhome() {
  return (
    <>
      <div class=" uk-visible@s uk-visible@m ">
        <div class="ipadheadbackground-am">
          <Link href="#" class="linkclass">
            <img src={ipadpro} alt="" class="headipadpro-am " />
            <p
              class="ipadprocap-am"
              style={{ textDecoration: "none", color: "black" }}
            >
              iPad Pro
            </p>
            <p
              class="ipadpronewcap-am"
              style={{
                color: "#f56300",
                marginLeft: "23.8%",
                marginTop: "0%",
                fontSize: "55%",
              }}
            >
              New
            </p>
          </Link>

          <Link href="#" class="linkclass">
            <img src={ipadair} alt="" class="headipadair-am " />
            <p
              class="ipadprocap-am"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "29.7%",
                marginTop: "-5.5%",
              }}
            >
              iPad Air
            </p>
          </Link>

          <Link href="#" class="linkclass">
            <img
              src={ipad}
              alt=""
              class="headipadair-am "
              style={{ marginLeft: "36%", marginTop: "-9.5%" }}
            />
            <p
              class="ipadprocap-am"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "36.4%",
                marginTop: "-3%",
              }}
            >
              iPad
            </p>
          </Link>

          <img
            src={ipadmini}
            alt=""
            class="headipadair-am "
            style={{ marginLeft: "41%", marginTop: "-9.5%" }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "40.5%",
              marginTop: "-3%",
            }}
          >
            iPad mini
          </p>

          <img
            src={ipadcomp}
            alt=""
            class="headipadair-am "
            style={{ marginLeft: "46%", marginTop: "-8.5%" }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "45.7%",
              marginTop: "-3%",
            }}
          >
            compare
          </p>

          <img
            src={applepencil}
            alt=""
            class="headipadair-am "
            style={{ marginLeft: "52%", marginTop: "-9.5%" }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "51%",
              marginTop: "-3%",
            }}
          >
            Apple pencil
          </p>

          <img
            src={keyboard}
            alt=""
            class="headipadair-am "
            style={{
              marginLeft: "57%",
              marginTop: "-9.5%",
              width: "65px",
              height: "54px",
            }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "57.9%",
              marginTop: "-3%",
            }}
          >
            Keyboard
          </p>
          <p
            class="ipadpronewcap-am"
            style={{
              color: "#f56300",
              marginLeft: "59.4%",
              marginTop: "0%",
              fontSize: "55%",
            }}
          >
            New
          </p>

          <img
            src={airpod}
            alt=""
            class="headipadair-am "
            style={{
              marginLeft: "64%",
              marginTop: "-14%",
              width: "27px",
              height: "54px",
            }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "63.7%",
              marginTop: "-5.3%",
            }}
          >
            Airpod
          </p>

          <img
            src={ipadacc}
            alt=""
            class="headipadair-am "
            style={{
              marginLeft: "69%",
              marginTop: "-9.5%",
              width: "31px",
              height: "54px",
            }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "67.7%",
              marginTop: "-3%",
            }}
          >
            Accessories
          </p>

          <img
            src={ipados}
            alt=""
            class="headipadair-am "
            style={{
              marginLeft: "74%",
              marginTop: "-9.5%",
              width: "33px",
              height: "54px",
            }}
          />
          <p
            class="ipadprocap-am"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "74%",
              marginTop: "-3%",
            }}
          >
            iPadOS
          </p>
        </div>

        <div style={{ marginTop: "7%" }}>
          <h2 class="ipadnewclass-am">New</h2>
          <h2 class="ipadproclass-am">iPad Pro</h2>
          <p class="experienceclass-am">
            The ultimate <br />
            iPad Experience{" "}
          </p>
          <p class="ipadpropriceclass-am">From $799</p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-65%", marginTop: "0%" }}
            >
              Buy
            </button>
          </p>
        </div>

        <div>
          <img src={ipadprohero} alt="" class="ipadprohero-am" />
        </div>

        <div>
          <img src={ipadairhero} alt="" class="ipadairhero-am" />
        </div>
        <div style={{ marginLeft: "57%", marginTop: "-34%" }}>
          <h2 class="ipadproclass-am">iPad Air</h2>
          <p class="experienceclass-am" style={{ marginTop: "-6%" }}>
            Powerful. Colorful.
            <br />
            Wonderful.{" "}
          </p>
          <p class="ipadpropriceclass-am">From $599</p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-59%", marginTop: "0%" }}
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
            style={{ marginLeft: "19%", marginTop: "26%" }}
          />
        </div>
        <div style={{ marginLeft: "-5%", marginTop: "-28%" }}>
          <h2 class="ipadproclass-am">iPad</h2>
          <p class="experienceclass-am" style={{ marginTop: "-3%" }}>
            Delightfully capable.
            <br />
            Surprisingly affordable.{" "}
          </p>
          <p class="ipadpropriceclass-am">From $329</p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-65%", marginTop: "0%" }}
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
            style={{ marginLeft: "13%", marginTop: "13%" }}
          />
        </div>
        <div style={{ marginLeft: "57%", marginTop: "-34%" }}>
          <h2 class="ipadproclass-am">iPad mini</h2>
          <p class="experienceclass-am" style={{ marginTop: "-6%" }}>
            Small in size.
            <br />
            Big on capability.{" "}
          </p>
          <p class="ipadpropriceclass-am">From $399</p>
          <p class="ipadbuybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button
              class="buttonclass-am uk-button uk-button-primary"
              style={{ marginLeft: "-59%", marginTop: "0%" }}
            >
              Buy
            </button>
          </p>
        </div>
        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-width-1-2@m"
            style={{
              marginTop: "16%",
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
              <h2 class="cardtitle-am uk-card-title">
                Which iPad is right for you?
              </h2>
              <div>
                <img
                  src={compareipadpro}
                  alt=""
                  class="compareipadpro-am"
                  style={{ marginLeft: "13%", marginTop: "8%" }}
                />
                <p
                  class="ipadpronewcap-am"
                  style={{
                    color: "#f56300",
                    marginLeft: "19.8%",
                    marginTop: "1%",
                    fontSize: "67%",
                  }}
                >
                  New
                </p>
                <h3 class="webipadpro-am">iPad Pro</h3>
                <p class="webipadproprice-am">From $799</p>
                <img
                  src={ipadproswatches}
                  alt=""
                  class="ipadproswatches-am"
                  style={{ marginLeft: "19%", marginTop: "-1%" }}
                />
                <p class="webipadprobutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button class="webipadprobutton1-am uk-button uk-button-primary">
                    Buy
                  </button>
                </p>
              </div>
              <div style={{ marginLeft: "26%", marginTop: "-38%" }}>
                <img
                  src={compareipadairlarge}
                  alt=""
                  class="compareipadairlarge-am"
                  style={{ marginLeft: "13%", marginTop: "8%" }}
                />
                <div style={{ marginLeft: "-2%" }}>
                  <h3 class="webipadpro-am" style={{ marginTop: "4%" }}>
                    iPad Air
                  </h3>
                  <p class="webipadproprice-am" style={{ marginTop: "-2%" }}>
                    From $599
                  </p>
                  <img
                    src={compareipadairswatches}
                    alt=""
                    class="compareipadairswatches-am"
                    style={{ marginLeft: "15%", marginTop: "-1%" }}
                  />
                  <p
                    class="webipadprobutton-am"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    <button class="webipadprobutton1-am uk-button uk-button-primary">
                      Buy
                    </button>
                  </p>
                </div>
              </div>

              <div style={{ marginLeft: "46%", marginTop: "-37%" }}>
                <img
                  src={compareipad102}
                  alt=""
                  class="compareipad102-am"
                  style={{ marginLeft: "13%", marginTop: "8%" }}
                />
                <div style={{ marginLeft: "3%" }}>
                  <h3 class="webipadpro-am" style={{ marginTop: "6%" }}>
                    iPad
                  </h3>
                  <p
                    class="webipadproprice-am"
                    style={{ marginLeft: "17%", marginTop: "-3%" }}
                  >
                    From $329
                  </p>
                  <img
                    src={compareipad102swatches}
                    alt=""
                    class="compareipad102swatches-am"
                    style={{ marginLeft: "17%", marginTop: "-1%" }}
                  />
                  <p
                    class="webipadprobutton-am"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    <button
                      class="webipadprobutton1-am uk-button uk-button-primary"
                      style={{ marginLeft: "-54%" }}
                    >
                      Buy
                    </button>
                  </p>
                </div>
              </div>

              <div style={{ marginLeft: "66%", marginTop: "-34%" }}>
                <img
                  src={compareipadmini}
                  alt=""
                  class="compareipadmini-am"
                  style={{ marginLeft: "13%", marginTop: "13%" }}
                />
                {/* <img src={compareipadmini} alt="" class="compareipadmini" style={{marginLeft:'13%',marginTop:'8%'}}/> */}
                <div style={{ marginLeft: "4%" }}>
                  <h3 class="webipadpro-am" style={{ marginTop: "10%" }}>
                    iPad mini
                  </h3>
                  <p
                    class="webipadproprice-am"
                    style={{ marginLeft: "16%", marginTop: "-6%" }}
                  >
                    From $329
                  </p>
                  <img
                    src={compareipad102swatches}
                    alt=""
                    class="compareipad102swatches-am"
                    style={{ marginLeft: "16%", marginTop: "-1%" }}
                  />
                  <p
                    class="webipadprobutton-am"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    <button
                      class="webipadprobutton1-am uk-button uk-button-primary"
                      style={{ marginLeft: "-48%" }}
                    >
                      Buy
                    </button>
                  </p>
                </div>
              </div>
              <div>
                <hr
                  class="webhrclass1"
                  style={{ marginLeft: "13%", width: "16%", marginTop: "3%" }}
                />
                <hr
                  class="webhrclass2"
                  style={{
                    marginLeft: "32%",
                    width: "16%",
                    marginTop: "-1.6%",
                  }}
                />
                <hr
                  class="webhrclass3"
                  style={{
                    marginLeft: "51%",
                    width: "16%",
                    marginTop: "-1.7%",
                  }}
                />
                <hr
                  class="webhrclass4"
                  style={{
                    marginLeft: "69%",
                    width: "16%",
                    marginTop: "-1.8%",
                  }}
                />
              </div>
              <div>
                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "16%", marginTop: "3%" }}
                >
                  12.9” and 11”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "13%", marginTop: "-1%" }}
                >
                  12.9” Liquid Retina XDR display<sup>1</sup>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11” Liquid Retina display
                  <sup>1</sup>
                </p>

                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "38%", marginTop: "-7.5%" }}
                >
                  10.9”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "34.5%", marginTop: "-1%" }}
                >
                  Liquid Retina display<sup>1</sup>
                </p>

                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "57%", marginTop: "-5.7%" }}
                >
                  10.2”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "55.5%", marginTop: "-1%" }}
                >
                  Retina display
                </p>

                <p
                  class="webcomparegridhead1-am"
                  style={{ marginLeft: "75%", marginTop: "-5.8%" }}
                >
                  7.9”
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.6%", marginTop: "-1%" }}
                >
                  Retina display
                </p>
              </div>
              <div>
                <img
                  src={comparem1chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "19%", marginTop: "3%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "18.7%", marginTop: "0.9%" }}
                >
                  M1 chip
                </p>

                <img
                  src={comparea14chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "37.7%", marginTop: "-14.1%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "35.7%", marginTop: "-5.4%" }}
                >
                  A14 Bionic chip
                </p>

                <img
                  src={comparea12chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "57.5%", marginTop: "-14.1%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "55.5%", marginTop: "-5.4%" }}
                >
                  A12 Bionic chip
                </p>

                <img
                  src={comparea12chip}
                  alt=""
                  class="comparem1chip-am"
                  style={{ marginLeft: "74.5%", marginTop: "-14.1%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.3%", marginTop: "-5.4%" }}
                >
                  A12 Bionic chip
                </p>
              </div>

              <div>
                <img
                  src={compareusbc}
                  alt=""
                  class="compareusbc-am"
                  style={{ marginLeft: "18%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "13%", marginTop: "1%" }}
                >
                  USB-C connector with support <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for Thunderbolt / USB 4
                </p>

                <img
                  src={compareusbc2}
                  alt=""
                  class="compareusbc2-am"
                  style={{ marginLeft: "38%", marginTop: "-16%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "34.8%", marginTop: "-7%" }}
                >
                  USB-C connector
                </p>

                <img
                  src={comparelightning}
                  alt=""
                  class="compareusbc2-am"
                  style={{ marginLeft: "58%", marginTop: "-12.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "54.4%", marginTop: "-5.5%" }}
                >
                  Lightning connector
                </p>

                <img
                  src={comparelightning}
                  alt=""
                  class="compareusbc2-am"
                  style={{ marginLeft: "75%", marginTop: "-12.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "71.4%", marginTop: "-5.5%" }}
                >
                  Lightning connector
                </p>
              </div>
              <div>
                <img
                  src={comparecellular5g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "18%", marginTop: "4%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "17%", marginTop: "1%" }}
                >
                  5G cellular<sup>2</sup>
                </p>

                <img
                  src={comparecellular4g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "37%", marginTop: "-14%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "35%", marginTop: "-5.3%" }}
                >
                  4G LTE cellular<sup>2</sup>
                </p>

                <img
                  src={comparecellular4g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "57%", marginTop: "-14%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "55%", marginTop: "-5.3%" }}
                >
                  4G LTE cellular<sup>2</sup>
                </p>

                <img
                  src={comparecellular4g}
                  alt=""
                  class="comparecellular5g-am"
                  style={{ marginLeft: "74%", marginTop: "-14%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72%", marginTop: "-5.3%" }}
                >
                  4G LTE cellular<sup>2</sup>
                </p>
              </div>
              <div>
                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "17.5%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "16%", marginTop: "1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "13%", marginTop: "-1.6%" }}
                >
                  Apple Pencil (2nd generation)
                </p>

                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "36.5%", marginTop: "-15%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "35%", marginTop: "-7%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "32%", marginTop: "-1.7%" }}
                >
                  Apple Pencil (2nd generation)
                </p>

                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "56.5%", marginTop: "-15%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "55%", marginTop: "-7%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "52%", marginTop: "-1.7%" }}
                >
                  Apple Pencil (1st generation)
                </p>

                <img
                  src={comparepencil2}
                  alt=""
                  class="comparepencil2-am"
                  style={{ marginLeft: "73.5%", marginTop: "-15%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72%", marginTop: "-7%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "70%", marginTop: "-1.7%" }}
                >
                  Apple Pencil (1st generation)
                </p>
              </div>
              <div>
                <img
                  src={comparemagickeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "17.5%", marginTop: "2%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "16.3%", marginTop: "1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "15%", marginTop: "-1.6%" }}
                >
                  Magic Keyboard and
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "14.6%", marginTop: "-1.6%" }}
                >
                  Smart Keyboard Folio
                </p>

                <img
                  src={comparemagickeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "36.5%", marginTop: "-22.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "35.3%", marginTop: "-9%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "34%", marginTop: "-1.6%" }}
                >
                  Magic Keyboard and
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "33.6%", marginTop: "-1.6%" }}
                >
                  Smart Keyboard Folio
                </p>

                <img
                  src={comparesmartkeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "56.5%", marginTop: "-21.5%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "55.3%", marginTop: "-9.1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "55.2%", marginTop: "-1.6%" }}
                >
                  Smart Keyboard
                </p>

                <img
                  src={comparebluetoothkeyboard}
                  alt=""
                  class="comparemagickeyboard-am"
                  style={{ marginLeft: "73.5%", marginTop: "-16.6%" }}
                />
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "72.3%", marginTop: "-7.1%" }}
                >
                  Compatible with{" "}
                </p>
                <p
                  class="webcomparegridhead2-am"
                  style={{ marginLeft: "71.2%", marginTop: "-1.6%" }}
                >
                  Bluetooth keyboards
                </p>
              </div>
              <div>
                <hr
                  class="webhrclasslast1"
                  style={{ marginLeft: "12%", width: "16%", marginTop: "6%" }}
                ></hr>
                <hr
                  class="webhrclasslast2"
                  style={{
                    marginLeft: "32%",
                    width: "16%",
                    marginTop: "-1.8%",
                  }}
                ></hr>
                <hr
                  class="webhrclasslast3"
                  style={{
                    marginLeft: "52%",
                    width: "16%",
                    marginTop: "-1.8%",
                  }}
                ></hr>
                <hr
                  class="webhrclasslast3"
                  style={{
                    marginLeft: "70%",
                    width: "16%",
                    marginTop: "-1.8%",
                  }}
                ></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************visible in small ********************************** */}
      <Ipadsmall />
      {/* ***************************visible in medium ********************************** */}
      <Ipadmedium />
    </>
  );
}
