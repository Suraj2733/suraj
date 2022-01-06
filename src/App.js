import React from "react";
import New from "./component/New";
import Message from "./component/Message";
import Add from "./component/Add";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  export default function Contact(){
    return(
      <Router>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
        <Link to="/data">Add</Link>
         
        </div>
        <div>
        <Link to="/sec">ShowData</Link>
</div>
        
        <Switch>
          <Route exact path="/">
            <New />
          </Route>
          <Route exact path="/sec">
            <Message />
          </Route>
          <Route exact path="/data">
  <Add />
</Route>  
        </Switch>
      </Router>
      
    );
  };

  
  

  
  
  
  