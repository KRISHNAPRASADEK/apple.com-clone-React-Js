import React from "react";
import "./macbookair.css";
import sm from "../../assets/sm.jpg";
import med from "../../assets/med.jpg";
import l1 from "../../assets/l1.jpg";
import p1 from "../../assets/p1.jpg";
import apple from "../../assets/apple.png";
import pro from "../../assets/pro.png";
import machine from "../../assets/machine.png";
import maci from "../../assets/maci.jpg";
import retina from "../../assets/retina.jpg";
import retina1 from "../../assets/retina1.jpg";
import m1 from "../../assets/m1.jpg";
import macimg from "../../assets/macimg.png";
import six2 from "../../assets/six2.png";
import eleven1 from "../../assets/eleven1.png";
import eleven from "../../assets/eleven.png";
function macbookair() {
  return (
    //  -------------macbookair header---------
    <div class="uk-container-fluid">
      <div class=" mbap01-am1-1">
        <div class="mainlink-1">
          <a href="/macbook-air/" class="ml-1">
            MacBook Air
          </a>

          <button
            class="b2-1 uk-hidden@s"
            style={{
              float: " right",
              "margin-top": " -4%",
              "margin-right": " 8%",
            }}
          >
            Buy
          </button>
        </div>

        <div class=" ur-am1-1 " style={{ float: "right" }}>
          <nav>
            <a href class="list1-1 uk-visible@s">
              Overview
            </a>
            <a href class="list1-1 uk-visible@s">
              Why mac
            </a>
            <a href class="list1-1 uk-visible@s">
              Tech spec
            </a>
            {/* <a  href class="uk-button list1" >Buy </a> */}
            <button class="b2-1 uk-visible@s">Buy</button>
          </nav>
        </div>
      </div>
      <div style={{ "padding-top": "70px" }}>
        <hr class="uk-divider-large" />
      </div>
      <div class=" f2">
        <p class="para-am1 style={{    'margin-bottom': '4px'}}">
          Buy MacBook Air starting at $899 with education pricing. And get
          AirPods.*
        </p>
      </div>
      <div style={{ "padding-left": "19%", " margin-bottom": "-10%" }}>
        <video
          class="video-am1"
          src="https://www.apple.com/105/media/us/macbook-air/2020/e3fd8da8-1d68-4e62-886e-7982672a0499/anim/hero/large.mp4"
          uk-video="true"
        ></video>
      </div>
      <div class="hero-am1">
        <p class="p1-am1">MacBook Air</p>
        <h2 class="hero-headline typography-hero-headline">
          Power. It’s in the&nbsp;Air.
        </h2>
      </div>
      <div class="divp2-am1">
        <p class="p2-am1">
          Our thinnest, lightest notebook, completely transformed by the Apple
          M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our
          most advanced Neural Engine for up to 9x faster machine learning. The
          longest battery life ever in a MacBook Air. And a silent, fanless
          design. This much power has never been this ready&nbsp;to&nbsp;go.
        </p>{" "}
      </div>
      <div
        class="uk-grid  sim"
        style={{ "margin-top": "10%", "margin-right": "17%" }}
      >
        <div class="uk-width-1-2 sim1-am1">
          <img
            src={p1}
            class="p1-am1"
            style={{ float: "right", "margin-right": "15%" }}
          ></img>
        </div>
        <div class="uk-width-1-2">
          <p class="impara-am1 typography-eyebrow-elevated">
            Supercharged by the&nbsp;Apple&nbsp;M1&nbsp;chip
          </p>
        </div>
        {/* <div>
    <ul>
    <li>From $999</li>
    <li><a href>Watch the event</a></li>

    </ul>
    </div> */}
        <div class="apple1-am1">
          <img
            src={apple}
            style={{ "margin-left": "70%", width: "55%", "margin-top": "15%" }}
          ></img>
        </div>
      </div>
      <div>
        <p class="para3-am1 typography-headline-super no-margin-top large-10 medium-12">
          Small chip. Giant leap.
        </p>
      </div>
      <div style={{ "margin-left": "7%" }}>
        <p class="para4-am1 typography-badge-caption large-9 medium-11 small-12">
          It’s here. Our first chip designed specifically for Mac. Packed with
          an astonishing 16 billion transistors, the Apple&nbsp;M1 system on a
          chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much
          more onto a single tiny chip. With incredible performance, custom
          technologies, and industry-leading power efficiency,
          <sup class="footnote footnote-number">
            <a href="#footnote-4" aria-label="Footnote 1">
              1
            </a>
          </sup>{" "}
          M1 is not just a next step for Mac&nbsp;— it’s another level entirely.
        </p>
      </div>

      <div class="img4-am1">
        <img src={m1}></img>
      </div>
      <div>
        <source
          srcset="/v/macbook-air/j/images/overview/m1_eyebrow__dp0aixbj1pg2_small.png 1x ,/v/macbook-air/j/images/overview/m1_eyebrow__dp0aixbj1pg2_small_2x.png 2x "
          media="(max-width: 734px)"
        />
      </div>
      <div class=" grid grid-container">
        <header class="grid-item-header-am1">
          <h3 class="grid-item-am1 typography-eyebrow-reduced">CPU</h3>
          <div class="uk-grid cpu-am1">
            <div class="uk-width-1-2 gcpu-am1">
              <p class="typography-headline-super grid-headline-super">
                <span class="color-secondary">8-core CPU</span>
                <br></br>
                Devours tasks.<br></br> Sips battery.
              </p>
              <p class="description grid-item-description">
                M1 has the fastest CPU we’ve ever made. With that kind of
                processing speed, MacBook&nbsp;Air can take on new
                extraordinarily intensive tasks like professional-quality
                editing and action-packed gaming. But the 8‑core CPU on M1 isn‘t
                just up to 3.5x faster than the previous generation
                <sup class="footnote footnote-number">
                  <a href="#footnote-5" aria-label="Footnote 2">
                    2
                  </a>
                </sup>{" "}
                — it balances high-performance cores with efficiency cores that
                can still crush everyday jobs while using just a tenth of
                the&nbsp;power.
              </p>
              <button
                class="button-am1 button-compact grid-item-modal-trigger"
                data-analytics-click="prop3:open modal | see how m1 redefines speed"
                data-analytics-title="open modal | see how m1 redefines speed"
                data-analytics-intrapage-link=""
              >
                See how M1 redefines speed
              </button>
            </div>
            <div class="uk-width-1-2 propic-am1">
              <img
                src={pro}
                class="propic"
                style={{ "margin-top": "10%", width: "100%" }}
              ></img>
            </div>
          </div>
        </header>
      </div>
      <div class="uk-grid  gridam1">
        <div class="uk-width-2-3 " style={{ "padding-right": " 2%" }}>
          <header
            class="grid-item-header-am1 large-12"
            style={{
              background:
                "linear-gradient(to bottom, #203025 0%, #151516 100%)",
            }}
          >
            <h3 class="grid-item-eyebrow typography-eyebrow-reduced">
              All-day battery life
            </h3>
            <div class="text-content large-12">
              <p class="super-am1 grid-headline-super">
                Up to 18 hours of battery life. That’s 6 more hours, free of
                charge.
                <sup class="footnote footnote-number">
                  <a href="#footnote-16" aria-label="Footnote 13">
                    13
                  </a>
                </sup>
              </p>
            </div>
          </header>
        </div>

        <div class="uk-width-1-3 second-am1">
          <header>
            <h3 class="grid-item-eyebrow-am1 typography-eyebrow-reduced">
              Thermal efficiency
            </h3>
            <div class="grid-item-content-am1 content-centered">
              <div class="text-content large-12">
                <p class="typography-headline-super grid-headline-super">
                  <span class="color-secondary">
                    No fan. <br></br>No noise.
                  </span>{" "}
                  <br></br>Just Air.
                </p>
              </div>
            </div>
            <button
              class="button1-am1 button-compact grid-item-modal-trigger"
              data-analytics-click="prop3:open modal | see how m1 redefines speed"
              data-analytics-title="open modal | see how m1 redefines speed"
              data-analytics-intrapage-link=""
            >
              Get the M1 thermal story
            </button>
          </header>
        </div>
      </div>

      <div class="uk-grid third-am1 ">
        <div class="uk-width-1-2 gridten" style={{ "border-radius": "48px" }}>
          <header class="grid10-am1 large-12">
            <h3 class="grid-item-eyebrow typography-eyebrow-reduced">
              Machine learning
            </h3>
            <div class="text-content large-12" style={{ "margin-left": "-6%" }}>
              <img
                src={machine}
                style={{ "padding-top": "10%", "margin-bottom": "5%" }}
              ></img>
            </div>
          </header>
        </div>
        <div class="uk-width-1-2 typ10am1" style={{ "border-radius": "48px" }}>
          <p class="typ-am1 grid-item-description">
            Up to 9x faster.
            <sup class="footnote footnote-number">
              <a href="#footnote-17" aria-label="Footnote 14">
                14
              </a>
            </sup>{" "}
            Even for a 16‑core Neural Engine, that’s a lot to process.{" "}
            <span class="color-secondary1">
              Apps on MacBook&nbsp;Air can use machine learning (ML) to
              automatically retouch photos like a pro, make smart tools such as
              magic wands and audio filters more accurate at auto‑detection, and
              so much more. That’s not just brain power&nbsp;— that’s the power
              of a full stack of ML technologies.
            </span>
          </p>
        </div>
      </div>
      <div class="mac-am1">
        <div>
          <header class="head-am1">
            <h3 class="head2-am1">macOS Big Sur</h3>
            <div class="uk-grid">
              <div class="uk-width-1-2  macos-am1">
                <p class="fifthsection-am1 ">
                  The power of macOS&nbsp;Big&nbsp;Sur on M1.
                </p>
                <p class="fifthdesp-am1 ">
                  Developed to unlock the potential of the M1&nbsp;chip, macOS
                  Big Sur transforms Mac with major performance benefits and so
                  much more. Powerful updates for apps. A beautiful new design.
                  Industry-leading privacy features and best‑in‑class security.
                  It‘s our most powerful software ever&nbsp;— running on our
                  most advanced hardware&nbsp;yet.
                </p>
              </div>
              <div class="uk-width-1-2 macos1-am1">
                <img src={macimg} style={{ "padding-left": "19px" }}></img>
              </div>
            </div>
          </header>
          {/* <img src={maci}></img> */}
        </div>
      </div>

      <div class="uk-grid sixth-am1">
        <div class="uk-width-1-2 sixth1-am1">
          <header class="head-sixth">
            <h3 class="heading-six">Speed and responsiveness</h3>
            <p class="para-sixth">
              The M1&nbsp;chip and macOS&nbsp;Big&nbsp;Sur work together to make
              the entire system snappier. MacBook&nbsp;Air wakes instantly from
              sleep. Everyday tasks from flipping through photos to browsing
              Safari are faster. And your hardest-working apps all have access
              to the power they&nbsp;need.
            </p>
            <p class="second-parasix">
              More&nbsp; power.&nbsp;{" "}
              <span class="headline-secondary fade-in">
                Wakes&nbsp; instantly.
              </span>
            </p>
          </header>
        </div>
        <div class="uk-width-1-2 sixth2-am1">
          <header class="head-sixth">
            <h3 class="heading-six1">Biggest collection of apps ever</h3>
            <p class="para-sixth  ps">
              Run powerful apps built for M1. All your existing apps work thanks
              to Rosetta 2. And for the first time, you can use your favorite
              iPhone and iPad apps directly on macOS Big Sur. Altogether you’ll
              have access to the biggest collection of apps ever for Mac.
            </p>
            <img
              src={six2}
              class="run"
              style={{ "margin-left": "7%", "margin-top": " 8%" }}
            ></img>
          </header>
        </div>
      </div>

      {/* <div class="uk-grid seventh">
  <div class="uk-width-1-3">
  <header class="grid-item-header large-12">
						<h3 class="grid-item-eyebrow typography-eyebrow-reduced">Unified memory</h3>
					</header>
  </div>
  <div class="uk-width-1-3"></div>
  <div class="uk-width-1-3"></div>
</div> */}

      <div class="eight-am1">
        <header class="head-eight">
          <h3 class="heading-eight-am1">P3 wide color gamut</h3>
          <div class="uk-grid">
            <div
              class="uk-width-1-2 maineight-am1"
              style={{ "margin-bottom": " 16%" }}
            >
              <h3 class="h3-eightam1">
                A wider palette of colors on&nbsp;display.
              </h3>
            </div>
            <div class="uk-width-1-2 eight2div-am1">
              <span class="badge-value">
                25
                <span class="badge-subvalue">
                  % <span class="badge-caption">more colors than sRGB</span>
                </span>
              </span>
            </div>
          </div>
        </header>
      </div>

      <div class="section5-am1">
        <h2 class="section-eyebrow typography-headline-super retdisplay">
          Retina display
        </h2>
        <p class="section-header-headline typography-headline-super-am1 no-margin-top large-8 medium-9 small-12 retdis1">
          Lifelike colors <br></br> <br></br> for unreal beauty.
        </p>
        <p class="section-header-intro typography-badge-caption large-9 medium-11 small-12 color-gray retdis2">
          Images take on new levels of detail and realism on the brilliant
          13.3‑inch, 2560‑by‑1600-resolution Retina display. Text is sharp and
          clear. Colors are more vibrant than ever. And the glass goes right to
          the edge of the enclosure, so nothing takes away from your gorgeous
          view.
        </p>
      </div>

      <div>
        <img src={retina} class="ret-am1"></img>
        <img src={retina1} class="ret1-am1"></img>
      </div>

      <div class="maceleven uk-grid">
        <div class="uk-width-1-2@m maceleven1">
          <header class="elevenheader-am1">
            <h3 class="he11">Pixel density</h3>
            <img src={eleven1} class="imgeleven"></img>
            <div
              style={{
                "text-align": "center",
                "padding-bottom": "16%",
                " margin-top": "-35%",
              }}
            >
              <p class="cla11">clarity.</p>
            </div>
          </header>
        </div>
        <div class="uk-width-1-2@m maceleven2">
          <header class="elevenheader1-am1">
            <h3 class="true11">True Tone technology</h3>
            <p class="para11">
              <span class="color-fill">
                Good looking. And easy&nbsp;on the eyes.
              </span>{" "}
              <span class="color-fill-gray-two-tone">
                MacBook&nbsp;Air automatically adjusts the white point of your
                display to the color temperature of your environment for a more
                natural viewing experience.
              </span>
            </p>
            <img src={eleven} class="imgeleven1"></img>
          </header>
        </div>
      </div>

      {/* -------------sectiontweleve-------------- */}
      <div style={{ "margin-left": "16%", "margin-top": " 28%" }}>
        <h2 class="book12h2-am1">Camera and mics</h2>
        <p class="book12para-am1">You’re live on the Air.</p>
        <p class="book12para1-am1">
          The image signal processor in the M1&nbsp;chip helps you look your
          best for every FaceTime call and video conference. Three built‑in
          microphones make sure what you say gets heard whether you’re on a
          call, dictating a note, or asking Siri about the weather.
        </p>

        <h2 class="book12h2">Magic Keyboard</h2>
        <p class="book12para2-am1">Go ahead.Take the keys.</p>
        <p class="book12para3">
          When a keyboard types like a dream and still does a whole lot more:
          that’s magic. With new preprogrammed shortcuts, useful features are
          even easier to access. Get help from Siri, switch keyboard languages,
          respond with the perfect emoji, find documents with Spotlight —
          there’s so much you can do with just a tap. And the backlit keys with
          ambient light sensor help you type in low‑light&nbsp;settings.
        </p>
      </div>
    </div>
  );
}

export default macbookair;
