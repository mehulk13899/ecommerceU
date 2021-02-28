import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepages/homepage-componet';

import { Route, Link } from 'react-router-dom'


const HatePage = () => {
  return (
    <div>
      <Link to='/'>HomePage</Link>
      <h1>Hello World</h1>
    </div>
  )
}



function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatePage} />
    </div>
  );
}

export default App;
