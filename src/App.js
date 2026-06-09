import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tutorials from './components/Tutorials';
import BlogPosts from './components/BlogPosts';
import WhyThisWebsite from './components/WhyThisWebsite';
import Footer from './components/Footer';

function App() {
  const [data] = useState({ 
    name: '', 
    message: '', 
    image_url: '' 
  });

  return (
    <div className="App">
      <Header />
      <div className="pt-20">
        <Hero data={data} />
        <Skills />
        <Tutorials />
        <BlogPosts />
        <WhyThisWebsite />
        <Footer />
      </div>
    </div>
  );
}

export default App;
