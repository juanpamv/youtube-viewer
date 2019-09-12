import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content'
import Router from '../Router';

const App = () => (
  <div className="App">
    <Header />
    <Content >
      <Router />
    </Content>
    <Footer />
  </div>
)

export default App;
