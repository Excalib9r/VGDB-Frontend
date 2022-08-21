import React from 'react'
import backimage from './1157063.jpg';
import Header from './Header';
import { Footer } from './Footer';

export default function Home() {
  return (
    <div>
      <Header title="VGDB" showSearchBar={false} image={backimage} />
      <Footer/>
    </div>
  )
}

