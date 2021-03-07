import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import ShopPage from './pages/shoppage/shoppage-component'

import HeaderComponent from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from './redux/user/user-actions'
import { connect } from 'react-redux'
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //below method give store data 
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

        });
      } else {
        setCurrentUser(userAuth)
      }


    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignInAndSignUp} />
        </Switch>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
