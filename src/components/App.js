import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Products />
      </Router>
    </div>
  );
};

export default App;

// <Switch>
//   <Route path="/" component={Header} />
//   <Route path="/" component={Products} />
// </Switch>
