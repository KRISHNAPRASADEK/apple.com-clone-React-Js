
import React from 'react';
import "./music.css";
import intro from '../../assets/music/intro.mp4';
import amusic from '../../assets/music/apple_music_large.png';
import airpodsmaxlarge from '../../assets/music/airpods_max_large.png';
import airpodsmaxsmall from '../../assets/music/airpods_max_small.png';
import airpodsprolarge from '../../assets/music/airpods_pro_large.jpg';
import airpodslarge from '../../assets/music/airpods_large.jpg';
import ipodlarge from '../../assets/music/ipod_large.jpg';
import homepodminilarge from '../../assets/music/homepod_mini_large.jpg';
import appsfromapplelarge from '../../assets/music/appsfromapple_large.jpg';
import musicmemoslarge from '../../assets/music/musicmemos_large.jpg';
import garagebandlarge from '../../assets/music/garageband_large.jpg';
import logicproxlarge from '../../assets/music/logicprox_large.jpg';
import mainstage3large from '../../assets/music/mainstage3_large.jpg';
import bundlelarge from '../../assets/music/bundle_large.jpg';
import bundlemedium from '../../assets/music/bundle_medium.jpg';
import logoappleonelarge from '../../assets/music/logo-apple-one_large.png';
import free from '../../assets/music/free.svg';
import ways from '../../assets/music/ways.svg';

import uk180x180cc from '../../assets/music/uk 180x180cc.jpeg'
import hong180x180cc from '../../assets/music/hong 180x180cc.jpeg'
import armenia180x180cc from '../../assets/music/armenia 180x180cc.jpeg'
import behrain180x180cc from '../../assets/music/behrain 180x180cc.jpeg'

import essentials from '../../assets/music/essentials.jpeg'
import smile from '../../assets/music/smile.jpeg'
import nmd from '../../assets/music/nmd.jpeg'
import jesus from '../../assets/music/jesus.jpeg'

import rock from '../../assets/music/rock.jpeg'
import classical from '../../assets/music/classical.jpeg'
import hits from '../../assets/music/hits.jpeg'
import find from '../../assets/music/find.jpeg'

import distractions from '../../assets/music/distractions.jpeg'
import mirror from '../../assets/music/mirror.jpeg'
import stone from '../../assets/music/stone.jpeg'
import soufly from '../../assets/music/soulfly.jpeg'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="We Recommend" />
          <Tab label="Daily Top 100" />
          <Tab label="Just Updated"  />
          <Tab label="New Music"  />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">
              
              <ul className="main uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
                <li className="img1">
                  <img src={essentials} alt="" />
                </li>
                <li className="img2">
                  <img src={smile} alt="" />
                </li>
                <li className="img3">
                  <img src={nmd} alt="" />
                </li>
                <li className="img4">
                  <img src={jesus} alt="" />
                </li>
                <li className="img5">
                  <img src={jesus} alt="" />
                </li>
                <li className="img6">
                  <img src={hong180x180cc} alt="" />
                </li>
                <li className="img7">
                  <img src={distractions} alt="" />
                </li>
                <li className="img2">
                  <img src={mirror} alt="" />
                </li>
                <li className="img3">
                  <img src={stone} alt="" />
                </li>
                <li className="img4">
                  <img src={soufly} alt="" />
                </li>
              </ul>
        
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-previous data-uk-slider-item="previous"> </a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-next data-uk-slider-item="next"> </a>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
                      <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">
                        <ul className="main uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
                          
                          <li className="img1">
                            <img src={uk180x180cc} alt="" />
                          </li>
                          <li className="img2">
                            <img src={hong180x180cc} alt="" />
                          </li>
                          <li className="img3">
                            <img src={armenia180x180cc} alt="" />
                          </li>
                          <li className="img4">
                            <img src={behrain180x180cc} alt="" />
                          </li>
                          <li className="img5">
                            <img src={uk180x180cc} alt="" />
                          </li>
                          <li className="img6">
                            <img src={hong180x180cc} alt="" />
                          </li>
                          <li className="img7">
                            <img src={armenia180x180cc} alt="" />
                          </li>
                          <li className="img2">
                            <img src={behrain180x180cc} alt="" />
                          </li>
                          <li className="img3">
                            <img src={uk180x180cc} alt="" />
                          </li>
                          <li className="img4">
                            <img src={hong180x180cc} alt="" />
                          </li>
                        </ul>

                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-previous data-uk-slider-item="previous"> </a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-next data-uk-slider-item="next"> </a>
                      </div>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
                      <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">
                        <ul className="main uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
                          
                          <li className="img1">
                            <img src={rock} alt="" />
                            {/* <div class="music-slide-description">
						                	<h3 class="music-slide-headline">Today’s Hits</h3>
						                	<p class="music-slide-subhead">Apple Music</p>
						                </div> */}
                          </li>
                          <li className="img2">
                            <img src={classical} alt="" />
                          </li>
                          <li className="img3">
                            <img src={hits} alt="" />
                          </li>
                          <li className="img4">
                            <img src={find} alt="" />
                          </li>
                          <li className="img5">
                            <img src={rock} alt="" />
                          </li>
                          <li className="img6">
                            <img src={classical} alt="" />
                          </li>
                          <li className="img7">
                            <img src={rock} alt="" />
                          </li>
                          <li className="img2">
                            <img src={find} alt="" />
                          </li>
                          <li className="img3">
                            <img src={rock} alt="" />
                          </li>
                          <li className="img4">
                            <img src={classical} alt="" />
                          </li>
                        </ul>
                    
                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-previous data-uk-slider-item="previous"> </a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-next data-uk-slider-item="next"> </a>
                      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
                      <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">
                        <ul className="main uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
                          
                          <li className="img1">
                            <img src={distractions} alt="" />
                          </li>
                          <li className="img2">
                            <img src={mirror} alt="" />
                          </li>
                          <li className="img3">
                            <img src={stone} alt="" />
                          </li>
                          <li className="img4">
                            <img src={soufly} alt="" />
                          </li>
                          <li className="img5">
                            <img src={distractions} alt="" />
                          </li>
                          <li className="img6">
                            <img src={mirror} alt="" />
                          </li>
                          <li className="img7">
                            <img src={stone} alt="" />
                          </li>
                          <li className="img2">
                            <img src={soufly} alt="" />
                          </li>
                          <li className="img3">
                            <img src={distractions} alt="" />
                          </li>
                          <li className="img4">
                            <img src={mirror} alt="" />
                          </li>
                        </ul>

                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-previous data-uk-slider-item="previous"> </a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="# " data-uk-slidenav-next data-uk-slider-item="next"> </a>
                      </div>
      </TabPanel>
     
    </div>
  );
}





function music() {
    
    return (
        <div>

            {/* section-1 */}
            <section className="ms-part1">
                <div className="div1">
                    <video src={intro} autoPlay loop></video>
                </div>
                <div className="div2">
                    <img src={amusic} alt="" />
                </div>
                <div className="div3">
                    <h2>Music lives here.</h2>
                </div>
                <div className="div4">
                    <button className="uk-button uk-button-default"><a href="# ">Try it free<sup>*</sup></a></button>
                </div>
                <div className="div5">
                    
                </div>

            </section>

            {/* section-2 */}
            <section className="ms-part2">
                <div className="div1 uk-container uk-container-center">
                  <ScrollableTabsButtonForce/>
        
                </div>

            </section>

            {/* section-3 */}
            <section className="ms-part3">
                
                <div className="div1">
                    <img src={airpodsmaxlarge} alt="" />
                </div>
                <div className="div2">
                    <h2>AirPods Max</h2>
                </div>
                <div className="div3">
                    <button className="uk-button uk-button-primary"><a href="# ">Buy</a></button>
                    <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                </div>
                <div className="div4">
                    <img src={airpodsmaxsmall} alt="" />
                </div>

            </section>
             
            {/* section-4 */}
            <section className="ms-part4">
                <div className="main1">
                    <div className="div1">
                        <h2>AirPods Pro</h2>
                    </div>
                    <div className="div2">
                        <p>Magic like you’ve<br />never heard.</p>
                    </div>
                    <div className="div3">
                        <button className="uk-button uk-button-primary"><a href="# ">Buy</a></button>
                        <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                    <div className="div4">
                        <img src={airpodsprolarge} alt="" />
                    </div>

                </div>
                
                <div className="main2">
                    <div className="div1">
                        <h2>AirPods</h2>
                    </div>
                    <div className="div2">
                        <p>More magical<br />than ever.</p>
                    </div>
                    <div className="div3">
                        <button className="uk-button uk-button-primary"><a href="# ">Buy</a></button>
                        <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                    <div className="div4">
                        <img src={airpodslarge} alt="" />
                    </div>

                </div>

            </section>
            
            {/* section-5 */}
            <section className="ms-part5">
                <div className="main1">
                    <div className="div1">
                        <h2>iPod touch</h2>
                    </div>
                    <div className="div2">
                        <p>The music you love.<br />On the go.</p>
                    </div>
                    <div className="div3">
                        <button className="uk-button uk-button-primary"><a href="# ">Buy</a></button>
                        <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                    <div className="div4">
                        <img src={ipodlarge} alt="" />
                    </div>

                </div>
                
                <div className="main2">
                    <div className="div1">
                        <h2>HomePod mini</h2>
                    </div>
                    <div className="div2">
                        <p>Mini packs a punch.</p>
                    </div>
                    <div className="div3">
                        <button className="uk-button uk-button-primary"><a href="# ">Buy</a></button>
                        <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                    <div className="div4">
                        <img src={homepodminilarge} alt="" />
                    </div>

                </div>

            </section>
            
            {/* section-6 */}
            <section className="ms-part6">

                <div className="div1">
                    <h2>Music creation apps from Apple.</h2>
                </div>

                <div className="div2">
                    <img src={appsfromapplelarge} alt="" />
                </div>

                <div className="div3">
                    <div className="sub1">
                        <div>
                            <img src={musicmemoslarge} alt="" />
                        </div>
                        <div>
                            <h3>Music Memos</h3>
                        </div>
                        <div>
                            <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="sub2">
                        <div>
                            <img src={garagebandlarge} alt="" />
                        </div>
                        <div>
                            <h3>GarageBand</h3>
                        </div>
                        <div>
                            <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="sub3">
                        <div>
                            <img src={logicproxlarge} alt="" />
                        </div>
                        <div>
                            <h3>Logic Pro X</h3>
                        </div>
                        <div>
                            <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="sub4">
                        <div>
                            <img src={mainstage3large} alt="" />
                        </div>
                        <div>
                             <h3>MainStage 3</h3>
                        </div>
                        <div>
                            <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                </div>

            </section>
            
            {/* section-7 */}
            <section className="ms-part7">
                <div className="main1">
                    <img src={bundlelarge} alt="" />
                </div>
                <div className="main2">
                    <div className="div1">
                        <img src={logoappleonelarge} alt="" />
                    </div>
                    <div className="div2">
                        <p>Bundle four Apple services.<br />And enjoy more for less.</p>
                    </div>
                    <div className="div3">
                        <a href="# ">Try it free<sup>2</sup></a>
                        <a className="lm2" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                    <div className="div4">
                        <img src={bundlemedium} alt="" />
                    </div>
                </div>

            </section>


            {/* section-8 */}
            <section className="ms-part8">
                <div className="div1">
                    <img src={amusic} alt="" />
                </div>
                <div className="div2">
                    <h2>Working with Apple Music.</h2>
                </div>
                <div className="div3">
                    <p>Apple Music supports artists with tools to create, release and measure music across a global stage. Also, discover all the ways to showcase content on Apple Music — including MusicKit, RSS feeds, widgets, brand guidelines, badge art and more.</p>
                </div>
                <div className="div4">
                    <a href="# ">Apple Music for Artists<i uk-icon="chevron-right"></i></a>
                    <a className="lm2" href="# ">Apple Performance Marketing Partners<i  uk-icon="chevron-right"></i></a>
                </div>

            </section>


            {/* section-9 */}
            <section className="ms-part9">
                <div className="main1">
                    <div className="div1">
                        <img src={free} alt="" />
                    </div>
                    <div className="div2">
                        <h3>Free delivery</h3>
                    </div>
                    <div className="div3">
                        <p>Buy online and get free <br /> no-contact delivery.</p>
                    </div>
                    <div className="div4">
                        <a className="lm" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>

                <div className="main2">
                    <div className="div1">
                        <img src={ways} alt="" />
                    </div>
                    <div className="div2">
                        <h3>Ways to buy</h3>
                    </div>
                    <div className="div3">
                        <p>Buy the way that's right for you.</p>
                    </div>
                    <div className="div4">
                        <a className="lm" href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>


            </section>


            {/* SECTION-10 */}
            <section className="ms-part10">
                
                <div className="div1">
                    <div className="d">
                       *New subscribers only. ₹99/month after free trial. Plan automatically renews until cancelled. Terms apply.
                    </div>
                    <ol>
                        <li>The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</li>
                    </ol>
                </div>
            </section>

        </div>
    )
}

export default music
