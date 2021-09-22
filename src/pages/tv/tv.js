import React from "react";
import introvideo from "../../assets/tv/large.mp4";
import "./tv.css";
import appletvicon from "../../assets/tv/apple tv icon.png";
import tv4klogo from "../../assets/tv/tv 4k logo.png";
import tv4kremote from "../../assets/tv/apple tv 4k remote.jpg";
import watchnow from "../../assets/tv/watchnow.jpg";
import one from "../../assets/tv/one.png";
import tile from "../../assets/tv/tile large.jpg";
import game from "../../assets/tv/apple game.jpg";
import arcade from "../../assets/tv/arcade.png";
import mini from "../../assets/tv/mini.jpg";
import remote from "../../assets/tv/remote.jpg";
import airpod from "../../assets/tv/airpods.jpg";
import airpod734 from "../../assets/tv/airpods734.jpg";
import free from "../../assets/tv/free.svg";
import ways from "../../assets/tv/ways.svg";
import get from "../../assets/tv/get.svg";
import tvsvg from "../../assets/tv/tv.svg";
import stache from "../../assets/tv/stache is back.png";
import appletvplus from "../../assets/tv/appletvplus.png";
import tedlasso from "../../assets/tv/tedlasso.png";

function tv() {
  return (
    <div>
      <section className="as-part1">
        <video
          id="inrovideo"
          src={introvideo}
          type="video/mp4"
          autoPlay
        ></video>
        <div className="div1">
          <img src={stache} alt="" />
        </div>
        <div className="sub-main">
          <div className="div2">
            <img src={appletvplus} alt="" />
          </div>
          <div className="div3">
            <img src={tedlasso} alt="" />
          </div>
          <div className="div4">
            <button className="uk-button uk-button-default">
              <a href="# ">
                Stream now <span uk-icon="play-circle"></span>
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="as-part2">
        <div className="div1">
          <h5 className="new">New</h5>
        </div>
        <div className="div2">
          <img src={tv4klogo} alt="" />
        </div>
        <div className="div3">
          <h3>A higher definition of TV.</h3>
        </div>
        <div className="div4">
          <button className="uk-button uk-button-primary">
            <a href="# ">Buy</a>
          </button>
          <a className="lm" href="# ">
            Learn more<i uk-icon="chevron-right"></i>
          </a>
        </div>
        <div className="div5">
          <img src={tv4kremote} alt="" />
        </div>

        <div className="div6">
          <p>Get 3 months of Apple TV+ free when you buy an Apple TV 4K.1</p>
        </div>
      </section>

      <section className="as-part3">
        <div className="div1">
          <img src={appletvicon} alt="" />
        </div>
        <div className="div2">
          <h2>The Apple TV app</h2>
        </div>
        <div className="div3">
          <h3>All your TV. All in one app.</h3>
          <a className="lm2" href="# ">
            Learn more<i uk-icon="chevron-right"></i>
          </a>
        </div>
        <div className="div4">
          <img src={watchnow} alt="" />
        </div>
      </section>

      <section className="as-part4">
        <div className="div-main1">
          <div className="div1">
            <img src={one} alt="" />
          </div>
          <div className="div2">
            <p>
              Bundle four Apple services.<br></br>
              And enjoy more for less.
            </p>
          </div>
          <div className="div3">
            <a href="# ">
              Try it free<sup>2</sup>
            </a>
            <a className="lm2" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
          </div>
          <div className="div4">
            <img src={tile} alt="" />
          </div>
        </div>
        {/* main2 */}
        <div className="div-main2">
          <div className="div1">
            <img src={arcade} alt="" />
          </div>
          <div className="div2">
            <p>
              Get 3 months of Apple Arcade free <br />
              when you buy an Apple TV 4K.
            </p>
          </div>
          <div className="div3">
            <a href="# ">
              Try it free<sup>3</sup>
            </a>
            <a className="lm2" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
          </div>
          <div className="div4">
            <img src={game} alt="" />
          </div>
        </div>
      </section>

      <section className="as-part5">
        <div className="div1">
          <h2>Accessories for Apple TV</h2>
          <a href="# ">
            Shop now<i uk-icon="chevron-right"></i>
          </a>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="as-part6">
        {/* main1 */}
        <div className="main1">
          <div className="div1">
            <h3>HomePod mini</h3>
          </div>
          <div className="div2">
            <p>Mini packs a punch.</p>
          </div>
          <div className="div3">
            <button className="uk-button uk-button-primary">
              <a href="# ">Buy</a>
            </button>
            <a className="lm" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
          </div>
          <div className="div4">
            <img src={mini} alt="" />
          </div>
        </div>

        {/* main2 */}
        <div className="main2">
          <div className="div1">
            <h3>The new Apple TV Remote.</h3>
          </div>
          <div className="div2">
            <p>
              Upgrade your Apple TV with an all‑new remote with touch‑enabled
              clickpad.
            </p>
          </div>
          <div className="div3">
            <button className="uk-button uk-button-primary">
              <a href="# ">Buy</a>
            </button>
          </div>
          <div className="div4">
            <img src={remote} alt="" />
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="as-part7">
        {/* main1 */}
        <div className="main1">
          <div className="div1">
            <h3>
              Say it in a way <br />
              only you can.
            </h3>
          </div>
          <div className="div2">
            <p>
              Engrave your AirPods or AirPods Pro for free in 7 regional
              languages or English. Add a mix of emoji, text and numbers.
            </p>
          </div>
          <div className="div3">
            <button className="uk-button uk-button-primary">
              <a href="# ">Shop</a>
            </button>
            <a className="lm" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
          </div>
        </div>

        {/* main2 */}
        <div className="main2">
          <div className="div1">
            <img src={airpod} alt="" />
          </div>
          '
          <div className="div2">
            <img src={airpod734} alt="" />
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="as-part8">
        <div className="main1">
          <div className="div1">
            <img src={free} alt="" />
          </div>
          <div className="div2">
            <h3>Free delivery</h3>
          </div>
          <div className="div3">
            <p>
              Buy online and get free <br /> no-contact delivery.
            </p>
          </div>
          <div className="div4">
            <a className="lm" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
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
            <a className="lm" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="main3">
          <div className="div1">
            <img src={get} alt="" />
          </div>
          <div className="div2">
            <h3>Get help buying</h3>
          </div>
          <div className="div3">
            <p>
              Have a question? Call a<br />
              Specialist or chat online.
              <br />
              Call 000800 040 1966.
            </p>
          </div>
          <div className="div4">
            <a className="lm" href="# ">
              Contact us<i uk-icon="chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="main4">
          <div className="div1">
            <img src={tvsvg} alt="" />
          </div>
          <div className="div2">
            <h3>Apple TV+</h3>
          </div>
          <div className="div3">
            <p>
              Get 1 year of Apple TV+ free
              <br />
              when you buy an Apple TV.
            </p>
          </div>
          <div className="div4">
            <a className="lm" href="# ">
              Learn more<i uk-icon="chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="as-part9">
        <div className="div1">
          <ol>
            <li>
              ₹99/month after free trial. One subscription per Family Sharing
              group. Offer is valid for 3 months after eligible device
              activation. Plan automatically renews until cancelled.
              Restrictions and other terms apply.
            </li>
            <li>
              The Apple One free trial includes only services that you are not
              currently using through a free trial or a subscription. Plan
              automatically renews after trial until cancelled. Restrictions and
              other terms apply.
            </li>
            <li>
              ₹99/month after free trial. One subscription per Family Sharing
              group. Offer is valid for 3 months after eligible device
              activation. Plan automatically renews until cancelled.
              Restrictions and other terms apply.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default tv;
