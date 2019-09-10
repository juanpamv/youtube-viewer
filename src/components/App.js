import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content'
import Router from '../Router';

function App() {
  return (
    <div className="App">
      <Header />
      <Content >
        <Router />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
