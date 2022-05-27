import { useState } from 'react';
import './App.scss';
import About from './componets/About';
import Hedar from './componets/Hedar';
import Navbar from './componets/Navbar';

import Skills from './componets/Skills';
import Testmonias from './componets/Testmonias';
import Work from './componets/Work';
import loader from './assets/circle-loader-gif-2.gif'
import Contact from './componets/Contact';


function App() {

 

    return ( 
       < div className = "App" >

        <Navbar/>
    
        <Hedar/>
        <About/>

     <Work/>
     <Skills/>
     <Testmonias/>
     <div className="Footer">
         <Contact/>
     </div>
     
        </div>
    );
}

export default App;