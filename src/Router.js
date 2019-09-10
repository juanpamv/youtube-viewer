import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import NotFound from "./pages/NotFound";

const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/video/:videoId" component={Video} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Router;