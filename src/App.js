import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";

function App() {
  return (
    <div className="md:h-screen w-screen flex justify-center items-center flex-col bg-blue-100 text-gray-800 font-mont">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
