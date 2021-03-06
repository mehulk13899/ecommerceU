import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepages/homepage-component';
import ShopPage from './pages/shoppage/shoppage-component'

import HeaderComponent from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from './redux/user/user-actions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import CollectionPage from './pages/collections/collection.page.component'
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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop/:id' component={CollectionPage} />
          <Route exact path='/sign'
            render={
              () => this.props.currentUser ? (<Redirect to='/'></Redirect>) :
                (<SignInAndSignUp></SignInAndSignUp>)
            } />
        </Switch>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = (state) => (
  {
    currentUser: selectCurrentUser(state)
  })
export default connect(mapStateToProps, mapDispatchToProps)(App);
