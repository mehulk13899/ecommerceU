import React from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import ShopPage from './pages/shoppage/shoppage-component'
import { Route, Link, Switch } from 'react-router-dom'
import HeaderComponent from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { firebase, auth } from "./firebase/firebase-utils";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      current_user: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ current_user: user })
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent current_user={this.state.current_user}></HeaderComponent>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignInAndSignUp} />
        </Switch>
      </div >
    );
  }
}

export default App;
