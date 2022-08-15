import React from 'react'
import Navbar from './component/nav'
import Section1 from './accessory/section1/section1';
import Section2 from './accessory/section2/section2';
import Section3 from './accessory/section3/section3';
import Section4 from './accessory/section4/section4';
import Section5 from './accessory/section5/section5';
import Section6 from './accessory/section6/section6';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
