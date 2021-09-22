import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import Header from "../components/header/header";
import iphone12 from "../pages/iphone12/iphone12";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import Footer from "../components/footer/footer";
import tv from "../pages/tv/tv";
import music from "../pages/music/music";
import Support from "../pages/support/support";

import macbookair from "../pages/macbookair/macbookair";
import macbookairpro13 from "../pages/macbookairpro13/macbookairpro13";
import macbookairpro from "../pages/mackbookairpro16/macbookairpro";
import iPadhome from "../pages/iPadhome/Ipadhome";
import Macpages from "../pages/Macpages/Machome";

function Routes() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/tv" component={tv} />

        <Route exact path="/music" component={music} />

        <Route exact path="/Support" component={Support} />

        <Route exact path="/iphone12" component={iphone12} />

        <Route exact path="/Signin" component={Signin} />

        <Route exact path="/Signup" component={Signup} />

        <Route exact path="/macbookair" component={macbookair} />
        <Route exact path="/macbookairpro13" component={macbookairpro13} />
        <Route exact path="/macpro16" component={macbookairpro} />

        <Route exact path="/machome" component={Macpages} />
        <Route exact path="/ipad" component={iPadhome} />
      </Switch>

      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default Routes;
