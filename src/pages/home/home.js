import React from 'react';
import "./home.css";
import iphone121 from '../../assets/home/iphone_12_updated_large.jpg'
import iphone122 from '../../assets/home/iphone_12_updated_small.jpg'
import iphone12pro1 from '../../assets/home/iphone_12_pro_large.jpg'
import iphone12prosmall from '../../assets/home/iphone_12_pro_small.jpg'
import ipadprolarge from '../../assets/home/hero_ipad_pro_large.jpg'
import ipadprosmall from '../../assets/home/hero_ipad_pro_small.jpg'
import applewatch from '../../assets/home/promo_logo_watch_series_6_medium.png'
import promo_bts_large from '../../assets/home/promo_bts_large.jpg'
import promo_bts_medium from '../../assets/home/promo_bts_medium.jpg'
import promo_watch_series_6_lte__f8lrasjnry2y_small from '../../assets/home/promo_watch_series_6_lte__f8lrasjnry2y_small.jpg'
import promo_watch_series_large from '../../assets/home/promo_watch_series_large.jpg'
import promo_watch_series_medium from '../../assets/home/promo_watch_series_medium.jpg'
import promo_bts__bg3cb4kaoqoi_small from '../../assets/home/promo_bts__bg3cb4kaoqoi_small.jpg'
import promo_imac_large from '../../assets/home/promo_imac_large.jpg'
import promo_imac__crg641tip4q6_medium from '../../assets/home/promo_imac__crg641tip4q6_medium.jpg'
import promo_imac__crg641tip4q6_small from '../../assets/home/promo_imac__crg641tip4q6_small.jpg'
import promo_airtag_large from '../../assets/home/promo_airtag_large.jpg'
import promo_airtag__e6b73a64nno2_medium from '../../assets/home/promo_airtag__e6b73a64nno2_medium.jpg'
import promo_airtag__e6b73a64nno2_small from '../../assets/home/promo_airtag__e6b73a64nno2_small.jpg'

import promo_spatial_audio_billie_eilish_large from '../../assets/home/promo_spatial_audio_billie_eilish_large.jpg'
import promo_spatial_audio_billie_eilish_medium from '../../assets/home/promo_spatial_audio_billie_eilish__ltg83lkpcqq2_medium.jpg'
import promo_spatial_audio_billie_eilish_small from '../../assets/home/promo_spatial_audio_billie_eilish__ltg83lkpcqq2_small.jpg'

import promo_coda_large from'../../assets/home/promo_coda_large.jpg'
import promo_coda_medium from'../../assets/home/promo_coda__b4z92qy59piq_medium.jpg'
import promo_coda_small from'../../assets/home/promo_coda__b4z92qy59piq_small_2x.jpg'

import musiclogo from'../../assets/home/logo__dcojfwkzna2q_large.png'
import codalogo from'../../assets/home/promo_logo_coda__ehxr8quza402_large.png'
import sundancelogo from'../../assets/home/promo_logo_awards_coda__gnr9ahsp1nmi_large.png'
import tvpluslogo from'../../assets/home/logo_light__cfvl40z2nzau_large.png'

function Home(){
    return(
        <div>
            {/* section-1 */}
            <section className="hs-part1">
                <div className="d1">
                    <p>Shop now at the Apple Store online with many great ways to buy. Get free, no-contact delivery, Specialist help and<a className="lm2" href="# "> more<i uk-icon="chevron-right"></i></a> </p>
                </div>
                
                <div className="main1">
                    <div className="div1">
                        <h2>iPhone 12</h2>
                    </div>
                    <div className="div2">
                        <h3>Blast past fast</h3>
                    </div>
                    <div className="div3">
                        <p>From ₹69900<sup>*</sup> before trade-in</p>
                    </div>
                    <div className="div4">
                        <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>
                <div className="div5">
                        <img src={iphone121} alt="" />
                </div>
                <div className="div6">
                    <img src={iphone122} alt="" />
                </div>
            </section>
            
            {/* section2 */}
            <section className='hs-part2'>

                <div className="main1">
                    <div className="div1">
                        <h2>iPhone 12 Pro</h2>
                    </div>
                    <div className="div2">
                        <h3>It's a leap year.</h3>
                    </div>
                    <div className="div3">
                        <p>From ₹119900<sup>*</sup> before trade-in</p>
                    </div>
                    <div className="div4">
                        <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>

                <div className="div5">
                    <img src={iphone12pro1} alt="" />
                </div>

                <div className="div6">
                    <img src={iphone12prosmall} alt="" />
                </div>

            </section>

            {/* SECTIN 3 */}
            <section className="hs-part3">

                <div className="main1">
                    <div className="div1">
                        <h2>iPad Pro</h2>
                    </div>
                    <div className="div2">
                        <h3>Supercharged by the Apple M1 chip</h3>
                    </div>
                    <div className="div4">
                        <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>
                <div className="div5">
                    <img src={ipadprolarge} alt="" />
                </div>
                <div className="div6">
                    <img src={ipadprosmall} alt="" />
                </div>

            </section>

            {/* SECTION 4 */}
            <section className="hs-part4">

                <div className="main1">

                    <div className="div1">
                        <img src={promo_bts_large} alt="" />
                    </div>

                    <div className="div2">
                        <img src={promo_bts_medium} alt="" />
                    </div>

                    <div className="div4">
                        <img src={promo_bts__bg3cb4kaoqoi_small} alt="" />
                    </div>

                    <div className="div3">
                        <div className="sub1">
                            <h4>Buy a Mac or iPad for university. Get&nbsp;AirPods.<sup>1</sup></h4>
                        </div>
                        <div className="sub2">
                            <a  href="# ">Save with education pricing<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>

                </div>

                <div className="main2">

                    <div className="div1">
                        <img src={promo_watch_series_large} alt="" />
                    </div>

                    <div className="div2">
                        <img src={promo_watch_series_medium} alt="" />
                    </div>

                    <div className="div4">
                        <img src={promo_watch_series_6_lte__f8lrasjnry2y_small} alt="" />
                    </div>

                    <div className="div3">
                        <div className="sub1">
                            <img src={applewatch} alt="" />
                        </div>
                        <div className="sub2">
                            <h5>The future of health is on your wrist.</h5>
                        </div>
                        <div className="sub3">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>

                </div>

            </section>

            {/* SECTION 5 */}
            <section className="hs-part5 hs-part4">

                <div className="main1">
                
                    <div className="div1">
                        <img src={promo_imac_large} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={promo_imac__crg641tip4q6_medium} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={promo_imac__crg641tip4q6_small} alt="" />
                    </div>
                
                    <div className="div3">
                        <div className="sub1">
                            <h4>iMac</h4>
                        </div>
                        <div className="say">
                            <h5>Say hello.</h5>
                        </div>
                        <div className="sub2">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                
                </div>
                
                <div className="main2">
                
                    <div className="div1">
                        <img src={promo_airtag_large} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={promo_airtag__e6b73a64nno2_medium} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={promo_airtag__e6b73a64nno2_small} alt="" />
                    </div>
                
                    <div className="div3 airtag">
                        <div className="sub1">
                            <h4>AirTag</h4>
                        </div>
                        <div className="sub2 lose">
                            <h5>Lose your knack for losing thigs.</h5>
                        </div>
                        <div className="sub3">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                
                </div>

            </section>


            {/* SECTION 6 */}
            <section className="hs-part6 hs-part5 hs-part4">

                <div className="main1">
                
                    <div className="div1">
                        <img src={promo_spatial_audio_billie_eilish_large} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={promo_spatial_audio_billie_eilish_medium} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={promo_spatial_audio_billie_eilish_small} alt="" />
                    </div>
                
                    <div className="div3">
                        <div className="sub1">
                            <img src={musiclogo} alt="" />
                        </div>
                        <div className="sub2">
                            <h5>Introducing Spatial Audio<br/>with Dolby Atoms.</h5>
                        </div>
                        <div className="sub3 ln">
                            <a  href="# ">Listen now<sup>2</sup></a>
                        </div>
                    </div>
                
                </div>
                
                <div className="main2">
                
                    <div className="div1">
                        <img src={promo_coda_large} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={promo_coda_medium} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={promo_coda_small} alt="" />
                    </div>
                
                    <div className="div3 airtag">
                        <div className="sub1">
                            <img src={tvpluslogo} alt="" />
                        </div>
                    </div>

                    <div className="div3 coda">
                        <div className="sub1">
                            <img src={sundancelogo} alt="" />
                        </div>
                        <div className="sub1">
                            <img src={codalogo} alt="" />
                        </div>
                        <div className="sub2 lose">
                            <h5>Every family has its own language.</h5>
                        </div>
                        <div className="sub3">
                            <a href="# ">Stream now <i uk-icon="play-circle"></i></a>
                        </div>
                    </div>
                
                </div>

            </section>
            
        </div>
    );
}

export default Home;