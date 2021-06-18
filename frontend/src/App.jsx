import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Home from "./Components/Home/Home";
import MyRecipe from "./Components/MyRecipes/MyRecipe";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/Login/CreateAccount";
import NotFound from "./Components/Error/NotFound";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import DetailRecipe from "./Components/Detail/DetailRecipe";

function App() {
  return (
    <React.Fragment>
      <Router>

        {/* header */}
        <Header />
        <Switch>

          {/* Home page */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* My recipe */}
          <Route path="/my-recipes">
            <MyRecipe />
          </Route>

          {/* Add recipe */}
          <Route exact path="/au-recipe">
            <AddRecipe />
          </Route>
          {/* Update recipe */}
          <Route path="/au-recipe/:id">
            <AddRecipe />
          </Route>

          {/* Detail recipe */}
          <Route path="/detail-recipe/:id">
            <DetailRecipe />
          </Route>

          {/* Login */}
          <Route path="/login">
            <Login />
          </Route>
          {/* register */}
          <Route path="/register">
            <CreateAccount />
          </Route>

          <Route path='*' exact={true} component={NotFound} />

        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;