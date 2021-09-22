import React from 'react';
import './macbookairpro16.css';
import section51 from '../../assets/mackbook16/section51.jpg';
import section52 from '../../assets/mackbook16/section52.jpg';
import section5 from '../../assets/mackbook16/section5.jpg';
import section8 from '../../assets/mackbook16/section8.png';
import section81 from '../../assets/mackbook16/section81.jpg';
import section82 from '../../assets/mackbook16/section82.jpg';
function macbookairpro() {
    return (
        <div class="macbook-main16">


            {/* ----------------------section1------------ */}
          
            <div class=" main1pro">
                  <div class="main1pro-1"><a href="/macbook-pro-13/" class="main1link" >
									MacBook Pro 13”
								</a>
                                <button class="main1pro-b1 uk-hidden@s">Buy</button></div>
           
            <div class=" main1pro-2 " style={{'float':'right'}}  >
            

        <nav >
        
          <a href class="main1link-1 uk-visible@s" >Overview</a>
          
          <a href class="main1link-1 uk-visible@s" >Tech spec</a>
          {/* <a  href class="uk-button list1" >Buy </a> */}
          <button class="main1pro-b1 uk-visible@s">Buy</button>
          

                  
        </nav>
</div>
    </div>
    <hr></hr>

{/* -------------------------------section2------------------------- */}

        <div class="main2pro">
            <div class="main2pro-1"><h1 class="main2pro-h11">MacBook&nbsp;Pro</h1>
            <h2 class="main2pro-h12">The best for the&nbsp;brightest<span style={{'position':'absolute'}}>.</span></h2></div>

        </div>


        {/* --------------------------sectin4------------------------ */}
        <div class="main4pro">
        <p class="main4pro-para1">Designed for those who defy limits and change the world, the 16-inch MacBook&nbsp;Pro is by far the most powerful notebook we have ever made. With an immersive Retina display, superfast processors, advanced graphics, the largest battery capacity ever in a MacBook&nbsp;Pro, Magic&nbsp;Keyboard, and massive storage, it's the ultimate pro notebook for the ultimate user.</p>
        <a href class="main4link-1 " >Watch the film<span uk-icon=" play-circle"></span></a>
        </div>


        {/* --------------------------section5---------------------- */}
        <div class="main5pro">
            <div>
            <h2 class="main5pro-h21">Retina Display</h2>
            <h3 class="main5pro-h31">A big, beautiful workspace. For doing big, beautiful work.</h3>
          

            {/* <div class="main5pro-image1"></div>
            <div >
            <img src={section51} class="main5pro-image2"></img>
            <img src={section52} class="main5pro-image3" style={{    'margin-left': '12%','margin-top': '-25%'}}></img>
           </div> */}
            </div>
        </div>


        {/* -----------------------section6--------- */}
        <div class="main6pro">
        <div class="main6pro-img1">
                <div class="main6sec" style={{'background-color': '#f2f2f2'}}>
                <p class="main6pro-para1"><span class="no-wrap">"Boundaries are meant</span> to be pushed."</p>
                <p class="main6pro-para2 "><b>Chris Burkard</b></p>
                <p class="main6pro-para3">Adventure Photographer</p>
                </div>
                <img src={section5} class="main6img6"></img>
                <p class="main6pro-para4">
					MacBook Pro features a stunning <span class="bold">16-inch Retina display</span> — the largest Retina display ever in a Mac notebook. It produces <span class="bold">500 nits of brightness</span> for spectacular highlights and bright whites, while delivering deep blacks thanks to the precise photo alignment of liquid crystal molecules. And the <span class="bold">P3 wide color</span> gamut enables brilliant, true-to-life images and video. So no matter where you are, you’ll see your work in the best possible light.
				</p>
            </div>
        </div>



        {/* -------------------section7-------------------- */}

        <div class="main7pro">
				<h2 class="main7pro-para1">Processor and Memory</h2>
				<h3 class="main7pro-para2">Working at the speed of&nbsp;thought.</h3>
			</div>



            {/* --section8----------------- */}
            <div class="main6pro">
        <div class="main6pro-img1">
                <div class="main6sec" style={{'background-color': '#f2f2f2'}}>
                <p class="main6pro-para1">"This MacBook Pro is a game changer."</p>
                <p class="main6pro-para2 "><b>Oak Felder</b></p>
                <p class="main6pro-para3">GRAMMY®️-Nominated</p>
                <p class="main6pro-para3">Songwriter and Producer</p>
                </div>
                <img src={section8} class="main6img6"></img>
              
            </div>
        </div>


               <div><img src={section81} class="main8-img1"></img></div>

        <div><p class="main8pro-para1">
					The 16-inch MacBook Pro brings a whole new class of performance to the notebook. Thanks to a more advanced thermal design, the <span class="bold">Intel&nbsp;Core&nbsp;i9 processor</span> with up to 8 cores and 16 threads of processing power sustains <span class="bold">higher performance</span> for longer periods of time — and delivers up to 2.1 times the performance of a quad-core MacBook Pro. So whether you’re layering dozens of tracks and effects, rendering 3D models, or compiling and testing code, you’ll be doing it in no time&nbsp;flat.
				</p></div>
  

                <div><img src={section82} class="main8-img1"></img></div>
                <p class="main8pro-para2"><span class="bold">Up to 64GB of DDR4 memory means more efficient multitasking.</span> The 16-inch MacBook&nbsp;Pro uses fast 2666MHz DDR4 memory — up to 64GB — for smooth performance whether you’re loading hundreds of audio samples, editing billion-pixel images, or running multiple virtual machines.</p>

             <div class="uk-grid main8pro-sec2">
                 <div class="uk-width-1-2">
                     <hr></hr>
                     <p class="main8pro-parasec21">Up to</p>
                     <p class="main8pro-parasec22">64GB</p>
                     <p class="main8pro-parasec23">DDR4 memory</p>
                 </div>
                 <div class="uk-width-1-2">
                     <hr></hr>
                     <p class="main8pro-parasec21">Up to</p>
                     <p class="main8pro-parasec22">4.3x</p>
                     <p class="main8pro-parasec23">faster than 16GB<sup>14</sup></p>
                 </div>
             </div>
        </div>
    );
}
export default macbookairpro;