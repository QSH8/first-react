import './css/App.css';
import React from 'react'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

const App = () => {
      return (
            <div className='app-wrapper'>
                  <Header />       
                  <Profile />                        
                  <Navigation />
            </div>
      )
}

export default App;
