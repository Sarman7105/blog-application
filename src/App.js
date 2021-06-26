import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Component/NavigationBar/Navbar'
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import AddBlog from './Component/AddBlog/AddBlog';
import Blog from './Component/Blog/Blog';
import BlogList from './Component/BlogList/BlogList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route path="/addblog">
            <AddBlog/>
          </Route>

          <Route path="/manage">
            <BlogList/>
          </Route>

          <Route path="/blog/:_id">
            <Blog/>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
