import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    </div>
  );
};

export default App;

// <Switch >
// <Route path="/" exact component={StreamList} />
//           </Switch >
