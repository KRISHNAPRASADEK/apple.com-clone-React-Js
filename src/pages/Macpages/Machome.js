import React from "react";
import "./Machome.css";
import "./Machomeresponsive.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Macsmall from "./Macsmall";
import Macmedium from "./Macmedium";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Machome() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div class=" uk-visible@s uk-visible@m ">
        <div class="headbackground-am">
          <figure class="headmacbookair-am"></figure>
          <br />
          <p class="macbookaircap-am">
            <Link to="/macbookair" style={{ color: "black" }}>
              MacBook Air
            </Link>
          </p>
          <figure class="headmacbookairpro13-am"></figure>
          <br />
          <p class="macbookpro13cap-am">
            <Link to="/macbookairpro13" style={{ color: "black" }}>
              MacBook Pro 13"
            </Link>
          </p>
          <figure class="headmacpro16-am"></figure>
          <br />
          <p class="macbookpro16cap-am">
            <Link to="/macpro16" style={{ color: "black" }}>
              MacBook Pro 16"
            </Link>
          </p>
          <figure class="headimac24-am"></figure>
          <br />
          <p class="imac24cap-am">iMac 24"</p>
          <p
            class="imac24newcap-am"
            style={{
              color: "#f56300",
              marginLeft: "37.4%",
              marginTop: "0%",
              fontSize: "55%",
            }}
          >
            New
          </p>
          <figure class="headimac27-am"></figure>
          <br />
          <p class="imac27cap-am">iMac 27"</p>
          <figure class="headimacpro-am"></figure>
          <br />
          <p class="imacprocap-am">Mac Pro</p>
          <figure class="headmacmini-am"></figure>
          <br />
          <p class="macminicap-am">Mac mini</p>
          <figure class="headcompare-am"></figure>
          <br />
          <p class="comparecap-am">Compare</p>
          <figure class="headprodisplay-am"></figure>
          <br />
          <p class="prodisplaycap-am">Pro Display XDR</p>
          <figure class="headaccessories-am"></figure>
          <br />
          <p class="accessoriescap-am">Accessories</p>
          <figure class="headbigsur-am"></figure>
          <br />
          <p class="bigsurcap-am">Bigsur</p>
        </div>
        <div style={{ marginTop: "7%" }}>
          <h2 class="newclass-am">New</h2>
          <h2 class="macclass-am">iMac</h2>
          <p class="helloclass-am">Say hello</p>
          <p class="priceclass-am">From $1299</p>
          <p class="buybutton-am" style={{ textAlign: "center" }}>
            {" "}
            <button class="buttonclass-am uk-button uk-button-primary">
              Buy
            </button>
          </p>
        </div>
        <div>
          <figure class="figimage1-am"></figure>
        </div>
        <div class="rightmacbackground-am">
          <h2 class="rightmac-am">Which Mac is right for you?</h2>
          <div className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="none"
              class="tabclass-am"
            >
              <Tab
                label="Notebook"
                style={{
                  textTransform: "capitalize",
                  fontSize: "15px",
                  marginLeft: "524px",
                }}
                {...a11yProps(0)}
              />
              <Tab
                label="Desktop"
                style={{
                  textTransform: "capitalize",
                  fontSize: "15px",
                  marginLeft: "-51px",
                }}
                {...a11yProps(1)}
              />
            </Tabs>
            <hr class="hrclass-am" />
            <TabPanel value={value} index={0}>
              <div>
                <figure class="notebookimageone-am"></figure>
                <p class="macbookair-am">MacBook Air </p> <br />
                <p class="macbookprice-am">From $999</p> <br />
                <figure class="dotclass1-am"></figure>
                <p class="macbuybutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button class="buttonclass1-am uk-button uk-button-primary">
                    Buy
                  </button>
                </p>
                <hr
                  class="macbookairhrclass-am"
                  style={{ width: "23%", marginLeft: "15%" }}
                />
                <figure class="notebookimagetwo-am"></figure>
                <p class="macbookpro-am">MacBook Pro 13” </p> <br />
                <p class="macbookproprice-am">From $1299</p> <br />
                <figure class="dotclass2-am"></figure>
                <p class="macprobuybutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button class="buttonclass2-am uk-button uk-button-primary">
                    Buy
                  </button>
                </p>
                <hr
                  class="macbookprohrclass-am"
                  style={{
                    width: "23%",
                    marginLeft: "41%",
                    marginTop: "1.8%",
                  }}
                />
                <figure class="notebookimagethree-am"></figure>
                <p class="macbookpro16-am">MacBook Pro 16” </p> <br />
                <p class="macbookproprice16-am">From $2399</p> <br />
                <figure class="dotclass3-am"></figure>
                <p class="macprobuybutton16-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button class="buttonclass3-am uk-button uk-button-primary">
                    Buy
                  </button>
                </p>
                <hr
                  class="macbookpro16hrclass-am"
                  style={{
                    width: "23%",
                    marginLeft: "67%",
                    marginTop: "1.8%",
                  }}
                />
              </div>
              <div>
                <p class="macbookairsize-am">13.3”</p>
                <p class="retinaclass1-am">
                  Retina display<sup>1</sup>
                </p>

                <p class="macbookprosize-am">13.3”</p>
                <p class="retinaclass2-am">
                  Retina display<sup>1</sup>
                </p>

                <p class="macbookpro16size-am">16”</p>
                <p class="retinaclass3-am">
                  Retina display<sup>1</sup>
                </p>

                <figure class="compareicon1-am"></figure>
                <p class="comparepara1-am">Apple M1 chip</p>

                <figure class="compareicon2-am"></figure>
                <p class="comparepara2-am">Apple M1 chip</p>
                <p class="comparepara21-am">
                  Also available with Intel Core <br /> i5 or i7 processor
                </p>

                <figure class="compareicon3-am"></figure>
                <p class="comparepara3-am">Up to Intel Core i9 processor</p>

                <figure class="comparememoryicon1-am"></figure>
                <p class="comparememorypara1-am">Up to 16GB unified memory</p>
                <p class="comparememorypara12-am">
                  For increased performance <br />
                  and power efficiency
                </p>

                <figure class="comparememoryicon2-am"></figure>
                <p class="comparememorypara2-am">
                  Up to 16GB unified memory<sup>4</sup>
                </p>
                <p class="comparememorypara22-am">
                  For increased performance <br />
                  and power efficiency
                </p>

                <figure class="comparememoryicon3-am"></figure>
                <p class="comparememorypara3-am">Up to 64GB memory</p>

                <p class="tb1-am">2TB</p>
                <p class="tbpara1-am">
                  Maximum configurable storage<sup>2</sup>
                </p>

                <p class="tb2-am">2TB</p>
                <p class="tbpara2-am">
                  Maximum configurable storage<sup>4</sup>
                </p>

                <p class="tb3-am">8TB</p>
                <p class="tbpara3-am">
                  Maximum configurable storage<sup>2</sup>
                </p>

                <figure class="batteryimage1-am"></figure>
                <p class="batterypara1-am">
                  Up to 18 hours battery life<sup>3</sup>
                </p>

                <figure
                  class="batteryimage1-am"
                  style={{ marginLeft: "49%", marginTop: "-6.7%" }}
                ></figure>
                <p class="batterypara2-am">
                  Up to 20 hours battery life<sup>5</sup>
                </p>

                <figure
                  class="batteryimage1-am"
                  style={{ marginLeft: "79%", marginTop: "-6.5%" }}
                ></figure>
                <p class="batterypara3-am">
                  Up to 11 hours battery life<sup>6</sup>
                </p>

                <figure class="cameraimage1-am"></figure>
                <p class="camerapara1-am">720p FaceTime HD camera</p>
                <p class="camerapara12-am">
                  With the image signal
                  <br />
                  processor of M1 for drastically
                  <br />
                  improved performance
                </p>

                <figure
                  class="cameraimage1-am"
                  style={{ marginLeft: "49%", marginTop: "-11.9%" }}
                ></figure>
                <p class="camerapara1-am" style={{ marginLeft: "2%" }}>
                  720p FaceTime HD camera
                </p>
                <p class="camerapara12-am" style={{ marginLeft: "2%" }}>
                  With the image signal
                  <br />
                  processor of M1 for drastically
                  <br />
                  improved performance
                </p>

                <figure
                  class="cameraimage1-am"
                  style={{ marginLeft: "79%", marginTop: "-11.9%" }}
                ></figure>
                <p class="camerapara1-am" style={{ marginLeft: "63%" }}>
                  720p FaceTime HD camera
                </p>

                <p class="lbclass1-am">2.8 lb.</p>
                <p class="lbclasspara1-am">Weight</p>

                <p
                  class="lbclass1-am"
                  style={{ marginLeft: "2%", marginTop: "-5%" }}
                >
                  3.0 lb.
                </p>
                <p class="lbclasspara1-am" style={{ marginLeft: "2%" }}>
                  Weight
                </p>

                <p
                  class="lbclass1-am"
                  style={{ marginLeft: "63%", marginTop: "-5%" }}
                >
                  4.3 lb.
                </p>
                <p class="lbclasspara1-am" style={{ marginLeft: "63%" }}>
                  Weight
                </p>

                <figure class="touchclass1-am"></figure>
                <p class="touchcap1-am">Touch ID</p>

                <figure class="touchclass2-am"></figure>
                <p class="touchcap2-am">Touch Bar and Touch ID</p>

                <figure
                  class="touchclass2-am"
                  style={{ marginLeft: "77%", marginTop: "-6.7%" }}
                ></figure>
                <p class="touchcap2-am" style={{ marginLeft: "67%" }}>
                  Touch Bar and Touch ID
                </p>

                <div>
                  <hr
                    class="touchhrclass1"
                    style={{
                      width: "21%",
                      marginLeft: "18%",
                      marginTop: "2.5%",
                    }}
                  ></hr>
                  <hr
                    class="touchhrclass3"
                    style={{
                      width: "26%",
                      marginLeft: "42%",
                      marginTop: "-1.6%",
                    }}
                  ></hr>
                  <hr
                    class="touchhrclass2"
                    style={{
                      width: "25%",
                      marginLeft: "70%",
                      marginTop: "-1.5%",
                    }}
                  ></hr>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div style={{ marginTop: "5%" }}>
                <figure class="desktopimageone-am"></figure>
                <p
                  class="deskimac24newcap-am"
                  style={{
                    color: "#f56300",
                    marginLeft: "-48.6%",
                    marginTop: "2%",
                    fontSize: "79%",
                  }}
                >
                  New
                </p>
                <p class="deskimac24-am">iMac 24” </p> <br />
                <p class="deskimac24price-am">From $1299</p> <br />
                <figure class="deskdotclass1-am"></figure>
                <p class="descimacbuybutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button class="deskbuttonclass1-am uk-button uk-button-primary">
                    Buy
                  </button>
                </p>
                <figure class="desktopimagetwo-am"></figure>
                <p class="deskimac27-am">iMac 27” </p> <br />
                <p class="deskimac27price-am">From $1799</p> <br />
                <figure class="deskdotclass2-am"></figure>
                <p class="descimacbuybutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="deskbuttonclass1-am uk-button uk-button-primary"
                    style={{ marginLeft: "-10.5%", marginTop: "0%" }}
                  >
                    Buy
                  </button>
                </p>
                <figure class="desktopimagethree-am"></figure>
                <p class="deskimacpro-am">Mac Pro </p> <br />
                <p class="deskimacproprice-am">From $5999</p> <br />
                <figure class="deskdotclass3-am"></figure>
                <p class="descimacbuybutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="deskbuttonclass1-am uk-button uk-button-primary"
                    style={{ marginLeft: "28.5%", marginTop: "0%" }}
                  >
                    Buy
                  </button>
                </p>
                <figure class="desktopimagefour-am"></figure>
                <p class="deskmacmini-am">Mac mini </p> <br />
                <p class="deskmacminiprice-am">From $699</p> <br />
                <figure class="deskdotclass4-am"></figure>
                <p class="descimacbuybutton-am" style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    class="deskbuttonclass1-am uk-button uk-button-primary"
                    style={{ marginLeft: "64.5%", marginTop: "0%" }}
                  >
                    Buy
                  </button>
                </p>
                <hr
                  class="descimachr1-am"
                  style={{ width: "18%", marginTop: "3%", marginLeft: "16%" }}
                />
                <hr
                  class="descimachr2-am"
                  style={{
                    width: "18%",
                    marginTop: "-1.7%",
                    marginLeft: "37%",
                  }}
                />
                <hr
                  class="descimachr3-am"
                  style={{
                    width: "16%",
                    marginTop: "-1.7%",
                    marginLeft: "58%",
                  }}
                />
                <hr
                  class="descimachr4-am"
                  style={{
                    width: "16%",
                    marginTop: "-1.7%",
                    marginLeft: "76%",
                  }}
                />
                <p class="deskretina1-am">4.5K</p>
                <p class="deskretinacap1-am">
                  Retina display<sup>7</sup>
                </p>
                <p class="deskretinacap12-am">218 ppi</p>
                <p class="deskretina2-am">5K</p>
                <p class="deskretinacap2-am">
                  Retina display<sup>1</sup>
                </p>
                <p class="deskretinacap12-am" style={{ marginLeft: "-11%" }}>
                  218 ppi
                </p>
                <p
                  class="deskretina3-am"
                  style={{
                    width: "2%",
                    borderBottom: "1px solid",
                    marginLeft: "64%",
                    marginTop: "-5%",
                  }}
                ></p>
                <p
                  class="deskretina4-am"
                  style={{
                    width: "2%",
                    borderBottom: "1px solid",
                    marginLeft: "82%",
                    marginTop: "-2%",
                  }}
                ></p>
                <figure class="m1chipclass1-am"></figure>
                <p class="m1chipcap1-am">Apple M1 chip</p>
                <figure class="m1chipclass2-am"></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "-10%", marginTop: "-1%" }}
                >
                  Up to Intel Core i9 processor
                </p>
                <figure
                  class="m1chipclass2-am"
                  style={{ marginLeft: "63%", marginTop: "-7%" }}
                ></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "30%", marginTop: "-1%" }}
                >
                  Intel Xeon W processor
                </p>
                <figure
                  class="m1chipclass1-am"
                  style={{ marginLeft: "81%", marginTop: "-6.9%" }}
                ></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "66%", marginTop: "-0.9%" }}
                >
                  Apple M1 chip
                </p>
                <p class="m1chipcap21-am">
                  Also available with Intel Core <br /> i5 or i7 processor
                </p>
                <figure class="deskmemoryclass1-am"></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "-48%", marginTop: "-0.9%" }}
                >
                  Up to 16GB unified memory
                </p>
                <p
                  class="m1chipcap21-am"
                  style={{ marginLeft: "-48%", marginTop: "-1.5%" }}
                >
                  For increased performance <br /> and power efficiency
                </p>
                <figure class="deskmemoryclass2-am"></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "-8%", marginTop: "-1%" }}
                >
                  Up to 128GB memory
                </p>
                <figure
                  class="deskmemoryclass2-am"
                  style={{ marginLeft: "63%", marginTop: "-7%" }}
                ></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "30%", marginTop: "-1%" }}
                >
                  Up to 1.5TB memory
                </p>
                <figure
                  class="deskmemoryclass1-am"
                  style={{ marginLeft: "82%", marginTop: "-6.9%" }}
                ></figure>
                <p
                  class="m1chipcap1-am"
                  style={{ marginLeft: "69%", marginTop: "-0.9%" }}
                >
                  Up to 16GB unified memory <sup>8</sup>
                </p>
                <p
                  class="m1chipcap21-am"
                  style={{ marginLeft: "69%", marginTop: "-1.5%" }}
                >
                  For increased performance <br /> and power efficiency
                </p>
                <p class="desk2tbclass-am">2TB</p>
                <p class="desk2tbclasspara-am">
                  Maximum configurable storage<sup>2</sup>
                </p>
                <p
                  class="desk2tbclass-am"
                  style={{ marginLeft: "-8%", marginTop: "-5%" }}
                >
                  8TB
                </p>
                <p class="desk2tbclasspara-am" style={{ marginLeft: "-6%" }}>
                  Maximum configurable storage<sup>2</sup>
                </p>
                <p
                  class="desk2tbclass-am"
                  style={{ marginLeft: "30%", marginTop: "-5%" }}
                >
                  8TB
                </p>
                <p class="desk2tbclasspara-am" style={{ marginLeft: "34%" }}>
                  Maximum configurable storage<sup>2</sup>
                </p>
                <p
                  class="desk2tbclass-am"
                  style={{ marginLeft: "69%", marginTop: "-5%" }}
                >
                  2TB
                </p>
                <p class="desk2tbclasspara-am" style={{ marginLeft: "72%" }}>
                  Maximum configurable storage<sup>2</sup>
                </p>
                <figure class="deskfacetimecameraclass1-am"></figure>
                <p class="deskfacetimecamerapara1-am">
                  1080p FaceTime HD camera
                </p>
                <p class="deskfacetimecamerapara2-am">
                  With the image signal
                  <br />
                  processor of M1 for drastically
                  <br />
                  improved performance
                </p>
                <figure
                  class="deskfacetimecameraclass1-am"
                  style={{ marginLeft: "44.5%", marginTop: "-11.3%" }}
                ></figure>
                <p
                  class="deskfacetimecamerapara1-am"
                  style={{ marginLeft: "-7%", marginTop: "-1.3%" }}
                >
                  1080p FaceTime HD camera
                </p>
                <p
                  class="deskfacetimecameraclass2-am"
                  style={{
                    width: "2%",
                    borderBottom: "1px solid",
                    marginLeft: "64%",
                    marginTop: "-5%",
                  }}
                ></p>
                <p
                  class="deskfacetimecameraclass3-am"
                  style={{
                    width: "2%",
                    borderBottom: "1px solid",
                    marginLeft: "84%",
                    marginTop: "-2%",
                  }}
                ></p>
                <figure class="deskmagickeyboardclass1-am"></figure>
                <p class="deskmagickeyboardpara1-am">
                  Configurable with
                  <br />
                  Magic Keyboard with
                  <br />
                  Touch ID and Numeric Keypad
                </p>
                <figure class="deskmagickeyboardclass2-am"></figure>
                <p class="deskmagickeyboardpara2-am">
                  Configurable with
                  <br />
                  Magic Keyboard with
                  <br />
                  Numeric Keypad
                </p>
                <figure
                  class="deskmagickeyboardclass2-am"
                  style={{ marginLeft: "62%", marginTop: "-10.3%" }}
                ></figure>
                <p
                  class="deskmagickeyboardpara2-am"
                  style={{ marginLeft: "36%" }}
                >
                  Magic Keyboard with
                  <br />
                  Numeric Keypad
                </p>
                <p
                  class="deskmagickeyboardclass3-am"
                  style={{
                    width: "2%",
                    borderBottom: "1px solid",
                    marginLeft: "84%",
                    marginTop: "-7%",
                  }}
                ></p>
                <hr
                  class="deskendhrclass1"
                  style={{
                    width: "21%",
                    marginLeft: "15%",
                    marginTop: "8.5%",
                  }}
                ></hr>
                <hr
                  class="deskendhrclass2"
                  style={{
                    width: "20%",
                    marginLeft: "39%",
                    marginTop: "-1.6%",
                  }}
                ></hr>
                <hr
                  class="deskendhrclass3"
                  style={{
                    width: "15%",
                    marginLeft: "61%",
                    marginTop: "-1.5%",
                  }}
                ></hr>
                <hr
                  class="deskendhrclass4"
                  style={{
                    width: "15%",
                    marginLeft: "79%",
                    marginTop: "-1.6%",
                  }}
                ></hr>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>

      {/* ***************************visible in small ********************************** */}

      <Macsmall />

      {/* ***************************visible in medium ********************************** */}
      <Macmedium />
    </>
  );
}
