import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';

class App extends React.Component {
  render() {
    return (
      <div className='site'>
        <Header />
        <div className='container'>
          <main>
            <Rate />
          </main>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
