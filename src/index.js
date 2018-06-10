import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import './index.css';
import App from './Components/App';
import Listing from './Components/Listing';
// import Categories from './Components/Categories';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('categories'));
ReactDOM.render(<Navbar />, document.getElementById('nav-bar'));
ReactDOM.render(<Listing />, document.getElementById('products'));
registerServiceWorker();
