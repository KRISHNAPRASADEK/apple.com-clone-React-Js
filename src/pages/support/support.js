import React from 'react';
import "./support.css";
import banner from '../../assets/support/hero-banner-baker-homepage.image.large_2x.jpg';
import iphone from '../../assets/support/homepage_productnav_iphone_2x.png';
import mac from '../../assets/support/homepage_productnav_imac_2x.png';
import ipad from '../../assets/support/homepage_productnav_ipad_2x.png';
import watch from '../../assets/support/homepage_productnav_apple_watch_2x.png';
import airpods from '../../assets/support/homepage-productdrawer-airpods-dark_2x.png';
import music from '../../assets/support/homepage_productdrawer_applemusic_2x.png';
import tv from '../../assets/support/homepage-productdrawer-appletv_2x.png';
import password from '../../assets/support/promo-icon-homepage-password_2x.png';
import repair from '../../assets/support/promo-icon-homepage-repair_2x.png';
import billing from '../../assets/support/promo-icon-homepage-subscriptions_2x.png';
import accessibility from '../../assets/support/content-link-accessibility-features_2x.png';
import kids from '../../assets/support/content-link-apple-for-kids_2x.png';
import today from '../../assets/support/featured-section-promo-todayatapple_2x.png';
import getsupport from '../../assets/support/psp-hero-banner-getsupport.image.large_2x.jpg';
import applecare from '../../assets/support/applecare-products_2x.png';
import twitter from '../../assets/support/social-icon-twitter.png';
import youtube from '../../assets/support/social-icon-youtube.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from '@fortawesome/fontawesome-svg-core';



dom.watch()



function Support() {
    
    return(
        <div className="main">
        
           <div className="part1">
               <img src={banner} alt="" />
               <h1>Welcome to Apple Support</h1>
               <nav className="uk-navbar-container" uk-navbar>
                <div className="uk-navbar-left">
                   <div className="uk-navbar-item">
                       <form className="uk-search uk-search-navbar">
                           <span data-uk-search-icon />
                           <input className="uk-search-input" type="search" placeholder="Search support" />
                       </form>
                   </div>
                </div>
               </nav>
           </div>
   
           <div className="part2">
               
               <div className="iphone">
                   <img src={iphone} alt="" />
                   <div className="img">
                       <a  href="# ">iphone</a>
                   </div>  
               </div>
               <div className="iphone">
                   <img src={mac} alt="" />
                   <div className="img">
                    <a href="# ">Mac</a>
                   </div>
               </div>
               <div className="iphone">
                   <img src={ipad} alt="" />
                   <div className="img">
                    <a href="# ">ipad</a>
                   </div>
               </div>
               <div className="iphone">
                   <img src={watch} alt="" />
                   <div className="img">
                    <a href="# ">Watch</a>
                   </div>
               </div>
               <div className="iphone">
                   <img src={airpods} alt="" />
                   <div className="img">
                    <a href="# ">AirPods</a>
                   </div>
               </div>
               <div className="iphone">
                   <img src={music} alt="" />
                   <div className="img">
                    <a href="# ">Music</a>
                   </div>
               </div>
               <div className="iphone">
                   <img src={tv} alt="" />
                   <div className="img">
                    <a href="# ">Tv</a>
                   </div>
               </div>
           </div>
   
           <div className="part3">
               <div className="sub3 col-1">
                   <img src={password} alt="" />
                   <div className="text3">
                     <a href="# ">Forgot Apple ID or password<i uk-icon="chevron-right"></i></a>
                   </div>
               </div>
   
               <div className="sub3 col-2">
                   <img src={repair} alt="" />
                   <div className="text3">
                     <a href="# ">Apple repair<i uk-icon="chevron-right"></i></a>
                   </div>
               </div>
   
               <div className="sub3 col-3">
                   <img src={billing} alt="" />
                   <div className="text3">
                     <a href="# ">Billing and Subscriptions<i uk-icon="chevron-right"></i></a>
                   </div>
               </div>
               
   
               
           </div>
   
           <div className="part4">
               <div className="sub4">
                   <img src={accessibility} alt="" />
                   
                   <div className="col-1">
                     <h3 class="h3-1">Designed for everyone</h3>
                     <p class="">Powerful assistive features are built into every Apple device to help you browse, work, play, and more.</p>
                     <a href="# ">Explore accessibility features<i uk-icon="chevron-right"></i></a>
                   </div>
                   
               </div>
   
               <div className="sub5">
                   <img src={kids} alt="" />
                   <div className="col-1">
                     <h3 class="h3-1">Discover helpful features for families and kids</h3>
                     <p class="">Learn how to manage an Apple device for your child, set up Family Sharing and Screen Time limits, and more.</p>
                     <a href="# ">Get your child set up<i uk-icon="chevron-right"></i></a>
   
                   </div>
   
               </div>
           </div>
   
           <div className="part5">
               <div className="virtual">
                   <h3>Virtual Sessions with Today at Apple</h3>
                   <p>Learn the basics of using iPhone, iPad, and Mac live with Apple Creatives.</p>
                   <a href="# ">signup<i uk-icon="chevron-right"></i></a>
   
               </div>
               <div className="today">
                   <img src={today} alt="" />
               </div>
           </div>
   
           <div className="part6">
               <img src={getsupport} alt="" />
               <div className="getsupport">
                   <h2>Get Support</h2>
                   <p>Choose a product and we’ll find you the best solution.</p>
                   <a href="# ">Start now<i uk-icon="chevron-right"></i></a>
                   <br/>
                   <br/>
                   <a href="# ">Download the Apple Support App<i uk-icon="chevron-right"></i></a>
               </div>
   
           </div>
   
           <div className="part7">
   
               <div className="care1">
                   <img src={applecare} alt="" />
   
               </div>
   
               <div className="care2">
                   <h3>Service and support from Apple experts</h3>
                   <p>AppleCare products provide additional hardware service 
                       options and expert technical support from Apple.
                   </p>
                   <a href="# ">Learn about AppleCare plans<i uk-icon="chevron-right"></i></a>
                   
   
               </div>
           </div>

           <div className="part8">
               <div className="beware">
                   <h3>Beware of counterfeit parts</h3>
                   <p>Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an <a href="# ">Apple Authorized Service Provider.</a> If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</p>
                   <p>Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</p>
               </div>
           </div>

           <div className="part9">
               <h2>Apple Service Programs</h2>
               <ul>
                   <li><a href="# ">iPhone 11 Display Module Replacement Program for Touch Issues</a></li>
                   <li><a href="# ">AirPods Pro Service Program for Sound Issues</a></li>
                   <li><a href="# ">iPad Air (3rd generation) Service Program for Blank Screen Issue</a></li>
                   <li><a href="# ">15-inch MacBook Pro Battery Recall Program</a></li>
                   <li><a href="# ">Apple Three-Prong AC Wall Plug Adapter Recall Program</a></li>
                   <li><a href="# ">See all programs<i uk-icon="chevron-right"></i></a></li>
               </ul>
           </div>

           <footer>
               <div className="footer1">
                   <div className="col-1">
                       <h2>Stay Connected with Apple Support</h2>
                   </div>
                   <div className="col-2">
                       <a href="https://twitter.com/AppleSupport"><img src={twitter} alt="" /> </a>
                       <a href="https://www.youtube.com/applesupport"> <img src={youtube} alt="" /></a>
                   </div>

               </div>
               <div className="footer2">
                   <div className="footer-welcome">
                       {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
                       <i id="apple" className="fab fa-apple"></i>
                       <i id="right" uk-icon="chevron-right"></i>
                       <p> Support</p>
                    </div>
                    <div className="footer-ul">
                       
                       <ul>
                         <li><h4>Product Support</h4></li>
                         <li><a href="# ">iPhone</a></li>
                         <li><a href="# ">Mac</a></li>
                         <li><a href="# ">iPad</a></li>
                         <li><a href="# ">Watch</a></li>
                         <li><a href="# ">Music</a></li>
                         <li><a href="# ">TV</a></li>
                         <li><a href="# ">Support Site Map</a></li>
                       </ul>
                       
                       <ul className="ulsub">
                         <li><h4>Service and Repair</h4></li>
                         <li><a href="# ">Apple Repair Options</a></li>
                         <li><a href="# ">Service and Repair Information</a></li>
                         <li><a href="# ">AppleCare Products</a></li>
                         <li><a href="# ">Hardware Warranties</a></li>
                         <li><a href="# ">Software License Agreements</a></li>
                         <li><a href="# ">Complimentary Support</a></li>
                       </ul>
                       
                       
                       <ul className="ulsub">
                         <li><h4>Resources</h4></li>
                         <li><a href="# ">Downloads</a></li>
                         <li><a href="# ">Manuals</a></li>
                         <li><a href="# ">Tech Specs</a></li>
                         <li><a href="# ">Accessibility</a></li>
                         <li><a href="# ">Education</a></li>
                         <li><a href="# ">Business</a></li>
                         <li><a href="# ">Apple Support Videos</a></li>
                       </ul>

                       
                       <ul className="ulsub">
                         <li><h4>Connect</h4></li>
                         <li><a href="# ">Contact Us</a></li>
                         <li><a href="# ">Phone Numbers</a></li>
                         <li><a href="# ">My Support</a></li>
                         <li><a href="# ">Apple Support App</a></li>
                         <li><a href="# ">Apple Support Communities</a></li>
                       </ul>

                       <ul uk-accordion= "multiple: true" className="god">
                           <li>
                               <h5 className="uk-accordion-title">Product Support</h5>
                               <div className="uk-accordion-content">
                                   <p><a href="# ">iPhone</a></p>
                                   <p><a href="# ">Mac</a></p>
                                   <p><a href="# ">iPad</a></p>
                                   <p><a href="# ">Watch</a></p>
                                   <p><a href="# ">Music</a></p>
                                   <p><a href="# ">TV</a></p>
                                   <p><a href="# ">Support Site Map</a></p>
                               </div>
                           </li>
                           <li>
                               <h5 class="uk-accordion-title">Service and Repair</h5>
                               <div class="uk-accordion-content">
                                   <p><a href="# ">Apple Repair Options</a></p>
                                   <p><a href="# ">Service and Repair Information</a></p>
                                   <p><a href="# ">AppleCare Products</a></p>
                                   <p><a href="# ">Hardware Warranties</a></p>
                                   <p><a href="# ">Software License Agreements</a></p>
                                   <p><a href="# ">Complimentary Support</a></p>
                               </div>
                           </li>
                           <li>
                               <h5 class="uk-accordion-title">Resources</h5>
                               <div class="uk-accordion-content">
                                    <p><a href="# ">Downloads</a></p>
                                    <p><a href="# ">Manuals</a></p>
                                    <p><a href="# ">Tech Specs</a></p>
                                    <p><a href="# ">Accessibility</a></p>
                                    <p><a href="# ">Education</a></p>
                                    <p><a href="# ">Business</a></p>
                                    <p><a href="# ">Apple Support Videos</a></p>
                               </div>
                           </li>
                           <li>
                               <h5 class="uk-accordion-title">Connect</h5>
                               <div class="uk-accordion-content">
                                   <p><a href="# ">Contact Us</a></p>
                                   <p><a href="# ">Phone Numbers</a></p>
                                   <p><a href="# ">My Support</a></p>
                                   <p><a href="# ">Apple Support App</a></p>
                                   <p><a href="# ">Apple Support Communities</a></p>
                               </div>
                           </li>

                        </ul>
                       
                    </div>

                    <div className="footer-copy">
                        <p>Copyright © 2021 Apple Inc. All rights reserved.</p>
                        <ul>
                          <li><a href="# ">Privacy Policy</a></li>
                          <li><a href="# ">Terms of Use</a></li>
                          <li><a href="# ">Sales Policy</a></li>
                          <li><a href="# ">Sitemap</a></li>
                        </ul>
                        <div id="india">India</div>
                        
                    </div>

               </div>
           </footer>

        </div>
        
    );
    
}

// Accordion function


//    var acc = document.body.getElementsByClassName('accordion')
//    var i;

       
//     for (i = 0; i < acc.length; i++) {
   
//            acc[i].addEventListener('click', function(e)  {
//                if(e.inn)
           
//                this.classList.toggle('active');
       
//                var panel = this.nextElementSibling;
//                if (panel.style.maxHeight) {
//                  panel.style.maxHeight = null;
//                } else {
//                  panel.style.maxHeight = panel.scrollHeight + "px";
//                } 
//            });
       
//    }


export default Support;